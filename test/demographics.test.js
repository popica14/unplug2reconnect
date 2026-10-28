// Tests for the demographics added to the sign-up: age and country (required), city and gender (optional).
const { assert, test, call } = require("./helpers");
const { createHandler, validate, MAX_CITY, MIN_AGE, MAX_AGE } = require("../lib/signup");
const { makeMemorySql } = require("../dev/memory-sql");
const serverCountries = require("../lib/countries");

const setup = () => {
  const db = makeMemorySql();
  return { db, handler: createHandler(() => db.sql) };
};
const ok = { email: "a@b.co", age: 24, country: "RO", consent: true };

module.exports = async () => {
  await test("age, country, city and gender are stored with the sign-up", async () => {
    const { db, handler } = setup();
    const r = await call(handler, { body: { ...ok, age: "31", country: " de ", city: "  Cluj   Napoca ", gender: "woman" } });
    assert.equal(r.status, 200);
    const row = db.rows[0];
    assert.equal(row.age, 31);
    assert.equal(row.country, "DE");
    assert.equal(row.city, "Cluj Napoca");
    assert.equal(row.gender, "woman");
  });

  await test("city and gender are optional and stored as null when empty", async () => {
    const { db, handler } = setup();
    await call(handler, { body: { ...ok, city: "   ", gender: "" } });
    assert.equal(db.rows[0].city, null);
    assert.equal(db.rows[0].gender, null);
  });

  await test("gender outside the offered values is stored as null, never as free text", () => {
    for (const gender of ["nonbinary", "other", "WOMAN", 1, {}, null, undefined, "man; DROP TABLE signups"]) {
      assert.equal(validate({ ...ok, gender }).gender, null, String(gender));
    }
    for (const gender of ["woman", "man"]) assert.equal(validate({ ...ok, gender }).gender, gender);
  });

  await test("age is required: missing, non-numeric, fractional or out of range is rejected", async () => {
    const bad = [undefined, null, "", "abc", "24.5", 24.5, -1, 0, MIN_AGE - 1, MAX_AGE + 1, 150, "1e2", "0x20", " ", [], {}, true, NaN];
    for (const age of bad) {
      const { db, handler } = setup();
      const r = await call(handler, { body: { ...ok, age } });
      assert.equal(r.status, 400, "age " + JSON.stringify(age));
      assert.equal(r.json.error, "invalid_age");
      assert.equal(db.rows.length, 0);
    }
  });

  await test("the youngest and oldest allowed ages are accepted, as numbers or digit strings", () => {
    assert.equal(validate({ ...ok, age: MIN_AGE }).age, MIN_AGE);
    assert.equal(validate({ ...ok, age: MAX_AGE }).age, MAX_AGE);
    assert.equal(validate({ ...ok, age: " 30 " }).age, 30);
  });

  await test("country is required and must be a known ISO code", async () => {
    for (const country of [undefined, null, "", "XX", "ZZ", "ROU", "R", "Romania", 40, {}, "QO", "EU", "AQ"]) {
      const { db, handler } = setup();
      const r = await call(handler, { body: { ...ok, country } });
      assert.equal(r.status, 400, "country " + JSON.stringify(country));
      assert.equal(r.json.error, "invalid_country");
      assert.equal(db.rows.length, 0);
    }
    for (const country of ["RO", "ro", "DE", "FR", "ES", "IT", "GB", "US", "XK"]) assert.equal(validate({ ...ok, country }).country, country.toUpperCase());
  });

  await test("the order of checks is email, age, country, consent", () => {
    assert.equal(validate({}).error, "invalid_email");
    assert.equal(validate({ email: "a@b.co" }).error, "invalid_age");
    assert.equal(validate({ email: "a@b.co", age: 20 }).error, "invalid_country");
    assert.equal(validate({ email: "a@b.co", age: 20, country: "RO" }).error, "consent_required");
  });

  await test("an overlong city is rejected, the limit itself is allowed", () => {
    assert.equal(validate({ ...ok, city: "x".repeat(MAX_CITY + 1) }).error, "too_long");
    assert.equal(validate({ ...ok, city: "x".repeat(MAX_CITY) }).city.length, MAX_CITY);
  });

  await test("control characters are stripped from the city", () => {
    assert.equal(validate({ ...ok, city: "Cl\u0000uj\u0007" }).city, "Cluj");
  });

  await test("a sign-up with the old form shape (no age or country) is refused", async () => {
    const { db, handler } = setup();
    const r = await call(handler, { body: { email: "a@b.co", consent: true } });
    assert.equal(r.status, 400);
    assert.equal(db.rows.length, 0);
  });

  await test("the country list: valid, no duplicates, and identical on server and in the browser", () => {
    assert.ok(serverCountries.length > 200);
    assert.equal(new Set(serverCountries).size, serverCountries.length, "duplicate codes");
    for (const code of serverCountries) assert.match(code, /^[A-Z]{2}$/);
    const names = new Intl.DisplayNames(["en"], { type: "region" });
    for (const code of serverCountries) assert.notEqual(names.of(code), code, code + " has no name");
    const sandbox = {};
    new Function("window", require("node:fs").readFileSync(require("node:path").join(__dirname, "..", "dist", "countries.js"), "utf8"))(sandbox);
    assert.deepEqual(sandbox.U2R_COUNTRIES, serverCountries);
  });

  await test("every language has all the demographic form texts", () => {
    const sandbox = {};
    new Function("window", require("node:fs").readFileSync(require("node:path").join(__dirname, "..", "dist", "translations.js"), "utf8"))(sandbox);
    const keys = ["demoIntro", "ageLabel", "countryLabel", "countryPlaceholder", "cityLabel", "genderLabel", "optional", "genderSkip", "genderWoman", "genderMan", "invalidAge", "invalidCountry"];
    for (const [locale, texts] of Object.entries(sandbox.U2R_TRANSLATIONS)) {
      for (const key of keys) assert.ok(texts.signup[key] && texts.signup[key].length > 1, locale + " is missing signup." + key);
    }
  });
};
