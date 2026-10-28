-- Pilot interest sign-ups. Run in the database's Query tab (Vercel > Storage > your database).
-- Safe to run again: every statement is "IF NOT EXISTS", so it also upgrades an older table.
-- Emails are stored lowercase and the unique index makes repeat sign-ups harmless.
-- Deliberately no name, phone or street address. Demographics (age, country, optional city and gender)
-- are collected only to understand who is interested in the pilot.
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

-- Demographics (added 2026-10, consent version 2026-10-v2).
-- The columns allow NULL because sign-ups from before this change have no answers. The API requires
-- age and country for every new sign-up. gender and city are optional (NULL = not said).
ALTER TABLE signups ADD COLUMN IF NOT EXISTS age     smallint;
ALTER TABLE signups ADD COLUMN IF NOT EXISTS country char(2);
ALTER TABLE signups ADD COLUMN IF NOT EXISTS city    text;
ALTER TABLE signups ADD COLUMN IF NOT EXISTS gender  text;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'signups_age_range') THEN
    ALTER TABLE signups ADD CONSTRAINT signups_age_range CHECK (age IS NULL OR age BETWEEN 16 AND 99);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'signups_country_code') THEN
    ALTER TABLE signups ADD CONSTRAINT signups_country_code CHECK (country IS NULL OR country ~ '^[A-Z]{2}$');
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'signups_city_length') THEN
    ALTER TABLE signups ADD CONSTRAINT signups_city_length CHECK (city IS NULL OR char_length(city) <= 100);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'signups_gender_values') THEN
    ALTER TABLE signups ADD CONSTRAINT signups_gender_values CHECK (gender IS NULL OR gender IN ('woman', 'man'));
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS signups_email_key ON signups (email);

-- Handy checks:
--   SELECT count(*) FROM signups WHERE unsubscribed_at IS NULL;   -- the number shown on the site
--   SELECT created_at, email, age, country, city, gender, message, question FROM signups ORDER BY created_at DESC LIMIT 20;
--   SELECT country, count(*) FROM signups WHERE unsubscribed_at IS NULL GROUP BY country ORDER BY count(*) DESC;
--   SELECT width_bucket(age, 16, 60, 11) AS bucket, min(age), max(age), count(*) FROM signups WHERE age IS NOT NULL GROUP BY 1 ORDER BY 1;
--   SELECT coalesce(gender, 'not said') AS gender, count(*) FROM signups GROUP BY 1 ORDER BY 2 DESC;
-- Remove someone who asks to be deleted:
--   DELETE FROM signups WHERE email = 'person@example.com';
-- Mark someone as unsubscribed (they stop counting, the row stays as a record):
--   UPDATE signups SET unsubscribed_at = now() WHERE email = 'person@example.com';
