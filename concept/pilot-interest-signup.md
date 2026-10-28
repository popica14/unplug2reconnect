# Pilot Interest Sign-up

## Goal

Before publishing dates, price, exact location and other pilot details, we want to validate real interest.

**Target: 50 interested people.**

This is **not a booking or application**. It simply means:

> I'm interested. Keep going. Tell me when you know more.

## Intro copy

### Help us get the first pilot off the ground.

Unplug to Reconnect is still at the beginning. Before we start adding all the details, we want to know if there are people out there who actually want this to happen.

We're looking for the first **50 people** interested in the pilot.

Leave us your email, a few words if you want, and any question you'd like us to answer as the pilot takes shape.

## Progress

Display prominently:

**17 / 50 people interested**

Add a simple progress bar.

- Use the real number of unique valid sign-ups.
- Never fake or seed the count.
- Do not stop accepting sign-ups after 50.
- After reaching the goal, show: **50+ people are interested. We made it.**
- Do not imply these are booked places.

## Form

### Email — required
Label: **Your email**

### About you — age and country required, city and gender optional
Short helper above the group:

> A little about you, so we know who this might be for. We only use it to understand who is interested.

| Field | Required | Control | Rules |
|---|---|---|---|
| **Your age** | **Yes** | Number input | Whole number, **16–99**. Under 16 is not accepted (16 is the GDPR default age of digital consent, so no parental consent is needed). |
| **Where do you live?** | **Yes** | Country menu | ISO 3166-1 code. Names shown in the visitor's language. Free text is not accepted. |
| **City or town** | No | Text input | Up to 100 characters. Stored as the visitor wrote it. |
| **Gender** | No | Menu | **I prefer not to answer** (default), **Woman**, **Man**. Anything else is stored as empty. |

Notes:

- Optional fields carry a small “optional” tag. Required ones carry no tag.
- Gender is a menu on purpose: fixed values keep the numbers countable and stop free text with sensitive details. “I prefer not to answer” is the default and is stored as empty.
- On desktop the four fields sit in two rows of two. On mobile they stack in one column.
- These details are never shown on the site. The team reads them in the database, and anything we share is totals only.

### Message — optional
Label: **Want to tell us something?**  
Helper: *A few words of encouragement, what you like about the idea, or whatever comes to mind.*

### Question — optional
Label: **What's important for you to know?**  
Helper: *Ask us anything you'd want answered before considering the pilot.*

### Consent — required, unchecked by default
> ☐ Yes, you can email me about Unplug to Reconnect and the first pilot.

Small text:

> We'll use your email to keep you updated about the project and the pilot. You can unsubscribe at any time.

Include a link to the privacy information. The privacy page must list age, country, city and gender, say why they are asked, and say that figures are shared as totals only.

### CTA

**I'm interested →**

Avoid “Subscribe”, “Register” or “Apply”.

## Success state

### You're one of the first.

Thanks for raising your hand.

We'll keep working on the pilot and let you know when there's something worth sharing.

And if you left us a question: we'll read it.

**18 / 50 people interested**

## Behaviour

- Prevent duplicate emails from increasing the counter.
- For duplicates show: **Looks like you're already in. Good to have you here.**
- Store: email, **age, country, city, gender**, message, question, consent, consent timestamp, created_at.
- Optionally store language, source page and consent version.
- Do not collect name, phone number or street address. Age, country, city and gender are the only personal details beyond the email, and only for the reasons above.
- Checks run in this order and the first failure is shown: email, age, country, consent, text length.
- The browser checks the same rules for a fast message, and the server checks them again. The server is the one that counts.
- Error messages: **Enter your age as a number, 16 or older.** / **Please choose the country you live in.**
- **Consent version** is now `2026-10-v2`. Bump it whenever the data we ask for or the consent wording changes, so each sign-up records what the person saw.
- Sign-ups made before this change have no age, country, city or gender. The database allows empty values for them, and the API requires age and country for every new sign-up.

## Why these fields

| Field | What it helps us decide |
|---|---|
| Age | The pilot is for 18–25 year olds. Shows whether the people who are interested match that, and how many are younger or older. |
| Country | Where people would travel from, which languages and travel advice matter, and whether to run a second group elsewhere. |
| City | Optional. Finer detail for shared transport or a regional group. Skipping it costs nothing. |
| Gender | Optional. Helps us plan a balanced group and accommodation. Never required, never used for selection on its own. |

## Reading the results

Run in the database's Query tab (also listed at the end of `db/schema.sql`):

```sql
SELECT country, count(*) FROM signups WHERE unsubscribed_at IS NULL GROUP BY country ORDER BY count(*) DESC;
SELECT width_bucket(age, 16, 60, 11) AS bucket, min(age), max(age), count(*) FROM signups WHERE age IS NOT NULL GROUP BY 1 ORDER BY 1;
SELECT coalesce(gender, 'not said') AS gender, count(*) FROM signups GROUP BY 1 ORDER BY 2 DESC;
```

## Still open (decide before the pilot is announced)

- **Under-18s.** The form accepts 16 and up, but the pilot is for 18–25. Decide whether to keep 16–17 on the list (and plan parental consent later) or raise the minimum to 18 in `lib/signup.js`, `dist/index.html`, `dist/script.js` and `db/schema.sql`.
- **Privacy page.** Still a draft: controller name, address, contact email, hosting provider and retention period must be filled in, and a lawyer should review it. Age and country are ordinary personal data under GDPR.
- **Not added, easy to add later as optional fields:** how they heard about the pilot (shows which channel works) and what they hope to get from the week. Left out to keep the form short.

## Tone & UX

Personal, direct and transparent. No startup hype, artificial urgency, “join the movement” language or countdowns.

The section should feel like Alex saying:

> I'm trying to make this happen. Before I go much further, I'd like to know whether there are 50 of you out there who think this is worth building.

Keep it inline on the website rather than a modal. On mobile, use one clear column.
