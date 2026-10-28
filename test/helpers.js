// Shared helpers for the sign-up tests.
const assert = require("node:assert/strict");

let passed = 0;
let failed = 0;

const test = async (name, fn) => {
  try {
    await fn();
    passed += 1;
    console.log("ok   " + name);
  } catch (error) {
    failed += 1;
    process.exitCode = 1;
    console.log("FAIL " + name + "\n     " + error.message);
  }
};

const call = async (handler, { method = "POST", body = {}, headers = {} } = {}) => {
  const res = {
    statusCode: 0, headers: {}, body: "",
    setHeader(key, value) { this.headers[key.toLowerCase()] = value; },
    end(chunk) { this.body = chunk || ""; }
  };
  await handler({ method, body, headers: { host: "example.com", ...headers } }, res);
  return { status: res.statusCode, json: res.body ? JSON.parse(res.body) : null, headers: res.headers };
};

const quiet = async (fn) => {
  const original = console.error;
  console.error = () => {};
  try {
    await fn();
  } finally {
    console.error = original;
  }
};

const summary = () => console.log("\n" + passed + " passed, " + failed + " failed");

module.exports = { assert, test, call, quiet, summary };
