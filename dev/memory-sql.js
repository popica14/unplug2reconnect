// In-memory stand-in for the database, used by the tests and by `npm run dev`.
// It understands only the two queries lib/signup.js runs. Data is lost on restart.
const makeMemorySql = (seedCount = 0) => {
  const rows = [];
  const calls = [];

  // Dev-only: lets you preview the "50+" state locally. Never used in production.
  for (let i = 0; i < seedCount; i += 1) {
    rows.push({ id: i + 1, email: `dev-seed-${i + 1}@example.invalid`, message: null, question: null, consent: true, unsubscribed_at: null });
  }

  const sql = async (strings, ...values) => {
    const text = strings.join("?");
    calls.push({ text, values });

    if (/INSERT INTO signups/i.test(text)) {
      const [email, age, country, city, gender, message, question, language, consentVersion, source] = values;
      if (rows.some((row) => row.email === email)) return [];
      const row = {
        id: rows.length + 1, email, age, country, city, gender, message, question, consent: true, language,
        consent_version: consentVersion, source, consent_at: new Date().toISOString(),
        created_at: new Date().toISOString(), unsubscribed_at: null
      };
      rows.push(row);
      return [{ id: row.id }];
    }

    if (/count\(\*\)/i.test(text)) return [{ count: rows.filter((row) => !row.unsubscribed_at).length }];

    throw new Error("memory-sql: unsupported query: " + text.slice(0, 60));
  };

  return { sql, rows, calls };
};

module.exports = { makeMemorySql };
