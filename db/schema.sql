-- Pilot interest sign-ups. Run once in the database's Query tab (Vercel > Storage > your database).
-- Emails are stored lowercase and the unique index makes repeat sign-ups harmless.
-- Deliberately no name, phone, address or age.
CREATE TABLE IF NOT EXISTS signups (
  id               bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email            text        NOT NULL,
  message          text,
  question         text,
  consent          boolean     NOT NULL,
  consent_at       timestamptz NOT NULL,
  consent_version  text        NOT NULL,
  language         text,
  source           text,
  created_at       timestamptz NOT NULL DEFAULT now(),
  unsubscribed_at  timestamptz,
  CONSTRAINT signups_consent_given CHECK (consent = true),
  CONSTRAINT signups_email_lowercase CHECK (email = lower(email)),
  CONSTRAINT signups_email_length CHECK (char_length(email) BETWEEN 6 AND 254),
  CONSTRAINT signups_message_length CHECK (message IS NULL OR char_length(message) <= 1000),
  CONSTRAINT signups_question_length CHECK (question IS NULL OR char_length(question) <= 1000)
);

CREATE UNIQUE INDEX IF NOT EXISTS signups_email_key ON signups (email);

-- Handy checks:
--   SELECT count(*) FROM signups WHERE unsubscribed_at IS NULL;   -- the number shown on the site
--   SELECT created_at, email, message, question FROM signups ORDER BY created_at DESC LIMIT 20;
-- Remove someone who asks to be deleted:
--   DELETE FROM signups WHERE email = 'person@example.com';
-- Mark someone as unsubscribed (they stop counting, the row stays as a record):
--   UPDATE signups SET unsubscribed_at = now() WHERE email = 'person@example.com';
