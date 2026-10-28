// Local dev server: serves dist/ and runs the real /api/signup with an IN-MEMORY database.
// Nothing is saved to disk or sent anywhere. Restarting clears the sign-ups.
//   npm run dev              -> http://localhost:8000
//   SEED=49 npm run dev      -> pretend 49 people already signed up (to preview the 50+ state)
const http = require("http");
const fs = require("fs");
const path = require("path");
const { createHandler } = require("../lib/signup");
const { makeMemorySql } = require("./memory-sql");

const PORT = Number(process.env.PORT) || 8000;
const DIST = path.join(__dirname, "..", "dist");
const db = makeMemorySql(Number(process.env.SEED) || 0);
const handler = createHandler(() => db.sql);

const types = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".json": "application/json"
};

http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

  if (url.pathname === "/api/signup") {
    let data = "";
    req.on("data", (chunk) => { data += chunk; });
    req.on("end", () => {
      try { req.body = data ? JSON.parse(data) : {}; } catch { req.body = {}; }
      handler(req, res);
    });
    return;
  }

  let file = path.join(DIST, decodeURIComponent(url.pathname));
  if (!file.startsWith(DIST)) { res.statusCode = 403; return res.end("forbidden"); }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, "index.html");
  if (!fs.existsSync(file)) { res.statusCode = 404; return res.end("not found"); }

  res.setHeader("Content-Type", types[path.extname(file)] || "application/octet-stream");
  fs.createReadStream(file).pipe(res);
}).listen(PORT, () => {
  console.log(`Dev server on http://localhost:${PORT}  (in-memory sign-ups, seeded with ${Number(process.env.SEED) || 0})`);
});
