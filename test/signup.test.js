// Test runner: `npm test`. Kept outside api/ because Vercel publishes everything in api/.
const { summary } = require("./helpers");

(async () => {
  await require("./storage.test")();
  await require("./validation.test")();
  summary();
})();
