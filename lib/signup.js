// Pilot interest sign-ups: the logic behind api/signup.js.
// Lives outside api/ on purpose: Vercel publishes every file in api/ as its own endpoint.
//
//   GET  /api/signup  -> { ok, count, goal }            the real number of unique sign-ups
//   POST /api/signup  -> { ok, duplicate, count, goal }  store one sign-up
//
// The database connection string comes from the environment variable that the Vercel
// storage integration adds to the project. It is never sent to the browser.
const COUNTRIES = require("./countries");

const GOAL = 50;
const CONSENT_VERSION = "2026-10-v2"; // bump whenever the consent wording or the data we ask for changes
const SOURCE = "landing";
const LOCALES = ["en", "de", "fr", "ro", "es", "it"];
const GENDERS = ["woman", "man"]; // anything else (or nothing) is stored as null = not said
const COUNTRY_SET = new Set(COUNTRIES);
const MIN_AGE = 16; // the GDPR default age of digital consent, so no parental consent is needed
const MAX_AGE = 99;
const MAX_TEXT = 1000;
const MAX_CITY = 100;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const CACHE_COUNT = "public, max-age=0, s-maxage=10, stale-while-revalidate=30";

const send = (res, status, body, cache = "no-store") => {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", cache);
  res.end(JSON.stringify(body));
};

const readBody = (req) => {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return {};
    }
  }
  return {};
};

// Strips control characters (tabs and line breaks stay) and surrounding whitespace.
const cleanText = (value) =>
  typeof value === "string" ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim() : "";

// A whole number from MIN_AGE to MAX_AGE, sent either as a number or as a digits-only string. Otherwise null.
const parseAge = (value) => {
  const number =
    typeof value === "number" ? value : typeof value === "string" && /^\d{1,3}$/.test(value.trim()) ? Number(value.trim()) : NaN;
  return Number.isInteger(number) && number >= MIN_AGE && number <= MAX_AGE ? number : null;
};

// Pure validation, so it can be tested without a database.
// Required: email, age, country, consent. Optional: city, gender, message, question.
const validate = (body) => {
  if (typeof body.website === "string" && body.website.trim() !== "") return { spam: true };

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (email.length < 6 || email.length > 254 || !EMAIL_PATTERN.test(email)) return { error: "invalid_email" };

  const age = parseAge(body.age);
  if (age === null) return { error: "invalid_age" };

  const country = typeof body.country === "string" ? body.country.trim().toUpperCase() : "";
  if (!COUNTRY_SET.has(country)) return { error: "invalid_country" };

  if (body.consent !== true) return { error: "consent_required" };

  const city = cleanText(body.city).replace(/\s+/g, " ");
  const message = cleanText(body.message);
  const question = cleanText(body.question);
  if (city.length > MAX_CITY || message.length > MAX_TEXT || question.length > MAX_TEXT) return { error: "too_long" };

  return {
    email,
    age,
    country,
    city: city || null,
    gender: GENDERS.includes(body.gender) ? body.gender : null,
    message: message || null,
    question: question || null,
    language: LOCALES.includes(body.language) ? body.language : "en"
  };
};

// Same-site requests only: if the browser sends an Origin, it must match this host.
const sameOrigin = (req) => {
  const origin = req.headers.origin;
  if (!origin) return true;
  try {
    return new URL(origin).host === req.headers.host;
  } catch {
    return false;
  }
};

// The number shown on the site: unique addresses that have not unsubscribed. Never seeded.
const countSignups = async (sql) => {
  const rows = await sql`SELECT count(*)::int AS count FROM signups WHERE unsubscribed_at IS NULL`;
  return Number(rows[0].count);
};

const countOrNull = async (sql) => {
  try {
    return await countSignups(sql);
  } catch {
    return null;
  }
};

const logError = (error) => console.error("signup failed:", error && error.message ? error.message : error);

const createHandler = (getSql) => async (req, res) => {
  if (req.method === "GET") {
    try {
      const count = await countSignups(getSql());
      return send(res, 200, { ok: true, count, goal: GOAL }, CACHE_COUNT);
    } catch (error) {
      logError(error);
      return send(res, 500, { ok: false, error: "server_error" });
    }
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return send(res, 405, { ok: false, error: "method_not_allowed" });
  }
  if (!sameOrigin(req)) return send(res, 403, { ok: false, error: "forbidden" });

  const result = validate(readBody(req));
  // A bot that fills the hidden field sees success; nothing is stored and no count is returned.
  if (result.spam) return send(res, 200, { ok: true, duplicate: false, count: null, goal: GOAL });
  if (result.error) return send(res, 400, { ok: false, error: result.error });

  try {
    const sql = getSql();
    const inserted = await sql`
      INSERT INTO signups (email, age, country, city, gender, message, question, consent, language, consent_at, consent_version, source)
      VALUES (${result.email}, ${result.age}, ${result.country}, ${result.city}, ${result.gender}, ${result.message}, ${result.question}, true, ${result.language}, now(), ${CONSENT_VERSION}, ${SOURCE})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;
    const duplicate = inserted.length === 0;
    return send(res, 200, { ok: true, duplicate, count: await countOrNull(sql), goal: GOAL });
  } catch (error) {
    logError(error);
    return send(res, 500, { ok: false, error: "server_error" });
  }
};

const getSql = () => {
  const url = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  if (!url) throw new Error("No DATABASE_URL or POSTGRES_URL is set for this deployment");
  const { neon } = require("@neondatabase/serverless");
  return neon(url);
};

module.exports = { createHandler, getSql, validate, GOAL, CONSENT_VERSION, MAX_TEXT, MAX_CITY, MIN_AGE, MAX_AGE };
