// Tests for lib/signup.js, part 2: validation, abuse protection and failure handling.
const { assert, test, call, quiet } = require("./helpers");
const { createHandler, validate } = require("../lib/signup");
const { makeMemorySql } = require("../dev/memory-sql");

const setup = () => {
  const db = makeMemorySql();
  return { db, handler: createHandler(() => db.sql) };
};
const ok = { email: "a@b.co", age: 24, country: "RO", consent: true };

module.exports = async () => {
  await test("invalid emails are rejected with 400 and nothing is stored", async () => {
    for (const email of ["", "nope", "a@b", "a b@c.de", "@x.com", "x".repeat(260) + "@e.com", 42, null, undefined]) {
      const { db, handler } = setup();
      const r = await call(handler, { body: { ...ok, email } });
      assert.equal(r.status, 400, "email " + String(email).slice(0, 20));
      assert.equal(r.json.error, "invalid_email");
      assert.equal(db.rows.length, 0);
    }
  });

  await test("consent must be exactly true", async () => {
    for (const consent of [false, undefined, "true", 1, "on", null]) {
      const { db, handler } = setup();
      const r = await call(handler, { body: { ...ok, consent } });
      assert.equal(r.status, 400, "consent " + String(consent));
      assert.equal(r.json.error, "consent_required");
      assert.equal(db.rows.length, 0);
    }
  });

  await test("control characters are stripped from free text, line breaks are kept", () => {
    assert.equal(validate({ ...ok, message: "he\u0000llo\u0007\nworld" }).message, "hello\nworld");
  });

  await test("non-string message/question values are ignored", () => {
    const r = validate({ ...ok, message: { a: 1 }, question: 42 });
    assert.equal(r.message, null);
    assert.equal(r.question, null);
  });

  await test("honeypot: a bot sees success but nothing is stored", async () => {
    const { db, handler } = setup();
    const r = await call(handler, { body: { ...ok, website: "http://spam" } });
    assert.equal(r.status, 200);
    assert.equal(r.json.ok, true);
    assert.equal(r.json.count, null);
    assert.equal(db.rows.length, 0);
  });

  await test("unknown language falls back to en", async () => {
    const { db, handler } = setup();
    await call(handler, { body: { ...ok, language: "xx" } });
    assert.equal(db.rows[0].language, "en");
  });

  await test("only GET and POST are allowed", async () => {
    for (const method of ["PUT", "DELETE", "PATCH"]) {
      const r = await call(setup().handler, { method });
      assert.equal(r.status, 405);
      assert.equal(r.headers.allow, "GET, POST");
    }
  });

  await test("cross-site POST is refused, same-site and no Origin are accepted", async () => {
    const { handler } = setup();
    assert.equal((await call(handler, { body: ok, headers: { origin: "https://evil.example" } })).status, 403);
    assert.equal((await call(handler, { body: { ...ok, email: "x@b.co" }, headers: { origin: "https://example.com" } })).status, 200);
    assert.equal((await call(handler, { body: { ...ok, email: "y@b.co" } })).status, 200);
  });

  await test("a JSON string body is parsed", async () => {
    const { db, handler } = setup();
    assert.equal((await call(handler, { body: JSON.stringify(ok) })).status, 200);
    assert.equal(db.rows.length, 1);
  });

  await test("a failing count after a successful insert does not turn the sign-up into an error", async () => {
    await quiet(async () => {
      const real = makeMemorySql();
      const sql = async (strings, ...values) => {
        if (/count\(\*\)/i.test(strings.join("?"))) throw new Error("count blew up");
        return real.sql(strings, ...values);
      };
      const r = await call(createHandler(() => sql), { body: ok });
      assert.equal(r.status, 200);
      assert.equal(r.json.ok, true);
      assert.equal(r.json.count, null);
    });
  });

  await test("database failure returns a generic 500 without leaking details (POST and GET)", async () => {
    await quiet(async () => {
      const handler = createHandler(() => async () => { throw new Error("connection refused to secret-host:5432"); });
      for (const request of [{ body: ok }, { method: "GET" }]) {
        const r = await call(handler, request);
        assert.equal(r.status, 500);
        assert.deepEqual(r.json, { ok: false, error: "server_error" });
        assert.ok(!JSON.stringify(r).includes("secret-host"));
      }
    });
  });

  await test("a missing database setting is a 500, not a crash", async () => {
    await quiet(async () => {
      const handler = createHandler(() => { throw new Error("No DATABASE_URL"); });
      assert.equal((await call(handler, { body: ok })).status, 500);
      assert.equal((await call(handler, { method: "GET" })).status, 500);
    });
  });

  await test("POST is never cached; the public count may be cached briefly", async () => {
    const { handler } = setup();
    assert.equal((await call(handler, { body: ok })).headers["cache-control"], "no-store");
    assert.match((await call(handler, { method: "GET" })).headers["cache-control"], /s-maxage=10/);
  });
};
