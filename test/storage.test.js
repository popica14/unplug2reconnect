// Tests for lib/signup.js, part 1: storing sign-ups and the real counter.
const { assert, test, call } = require("./helpers");
const { createHandler, GOAL, MAX_TEXT } = require("../lib/signup");
const { makeMemorySql } = require("../dev/memory-sql");

const setup = (seed = 0) => {
  const db = makeMemorySql(seed);
  return { db, handler: createHandler(() => db.sql) };
};
const ok = { email: "a@b.co", consent: true };

module.exports = async () => {
  await test("new sign-up is stored with email, message, question, consent and timestamps", async () => {
    const { db, handler } = setup();
    const r = await call(handler, { body: { email: "  Alex@Example.COM ", message: " hi ", question: " when? ", consent: true, language: "ro" } });
    assert.equal(r.status, 200);
    assert.deepEqual(r.json, { ok: true, duplicate: false, count: 1, goal: GOAL });
    const row = db.rows[0];
    assert.equal(row.email, "alex@example.com");
    assert.equal(row.message, "hi");
    assert.equal(row.question, "when?");
    assert.equal(row.consent, true);
    assert.equal(row.language, "ro");
    assert.match(row.consent_version, /^\d{4}-\d{2}-v\d+$/);
    assert.ok(row.consent_at && row.created_at);
  });

  await test("message and question are optional and stored as null when empty", async () => {
    const { db, handler } = setup();
    await call(handler, { body: { ...ok, message: "   ", question: "" } });
    assert.equal(db.rows[0].message, null);
    assert.equal(db.rows[0].question, null);
  });

  await test("the count is the real number of unique sign-ups, starting from zero", async () => {
    const { handler } = setup();
    assert.deepEqual((await call(handler, { method: "GET" })).json, { ok: true, count: 0, goal: 50 });
    for (const email of ["a@b.co", "b@b.co", "c@b.co"]) await call(handler, { body: { email, consent: true } });
    assert.equal((await call(handler, { method: "GET" })).json.count, 3);
  });

  await test("duplicate email does not raise the counter and is flagged as duplicate", async () => {
    const { db, handler } = setup();
    await call(handler, { body: ok });
    const again = await call(handler, { body: { email: "A@B.co", consent: true, message: "second try" } });
    assert.equal(again.status, 200);
    assert.equal(again.json.duplicate, true);
    assert.equal(again.json.count, 1);
    assert.equal(db.rows.length, 1);
    assert.equal(db.rows[0].message, null, "a duplicate must not overwrite the first entry");
  });

  await test("unsubscribed people do not count", async () => {
    const { db, handler } = setup();
    await call(handler, { body: ok });
    await call(handler, { body: { email: "b@b.co", consent: true } });
    db.rows[0].unsubscribed_at = "2026-11-01";
    assert.equal((await call(handler, { method: "GET" })).json.count, 1);
  });

  await test("sign-ups are still accepted after the goal is reached", async () => {
    const { handler } = setup(50);
    const r = await call(handler, { body: ok });
    assert.equal(r.status, 200);
    assert.equal(r.json.duplicate, false);
    assert.equal(r.json.count, 51);
  });

  await test("overlong message or question is rejected, the limit itself is allowed", async () => {
    const { db, handler } = setup();
    const a = await call(handler, { body: { ...ok, message: "x".repeat(MAX_TEXT + 1) } });
    assert.equal(a.status, 400);
    assert.equal(a.json.error, "too_long");
    assert.equal((await call(handler, { body: { ...ok, question: "x".repeat(MAX_TEXT + 1) } })).json.error, "too_long");
    assert.equal(db.rows.length, 0);
    assert.equal((await call(handler, { body: { ...ok, message: "x".repeat(MAX_TEXT) } })).status, 200);
  });
};
