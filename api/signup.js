// Vercel serverless function: /api/signup (see lib/signup.js for the logic).
const { createHandler, getSql } = require("../lib/signup");

module.exports = createHandler(getSql);
