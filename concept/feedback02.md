# UNPLUG TO RECONNECT — FORM & LAYOUT FEEDBACK

## Purpose

This feedback focuses on **form, hierarchy, rhythm, and presentation** rather than content.

The page is already much clearer in terms of meaning. The next step is to improve how the information is structured visually so the experience feels more deliberate, easier to scan, and more distinctive.

---

# 1 / REDUCE REPETITION IN SECTION HEADERS

## Issue

Several sections currently repeat the same idea twice:

- `01 / THE POINT` → `The point`
- `02 / A TYPICAL DAY AT CAMP` → `A typical day at camp`
- `05 / THE WEEK AT A GLANCE` → `The week at a glance`

This weakens hierarchy and adds unnecessary repetition.

## Recommendation

Keep the numbered eyebrow, then move directly into the main headline.

### Example

Instead of:

`01 / THE POINT`

**The point**

**Step away from the digital noise for a week.**

Use:

`01 / THE POINT`

**Step away from the digital noise for a week.**

## Dev note

Apply this pattern consistently across major sections.

---

# 2 / CREATE STRONGER CONTRAST BETWEEN INFORMATION AND MANIFESTO MOMENTS

## Issue

Many sections currently sit at a similar visual intensity.

Strong statements such as:

- `BOREDOM ALLOWED`
- `PACK WALK CAMP SUNRISE HOME`
- `10–12 people. 7 days. 0 algorithms deciding what comes next.`

should feel like deliberate pauses or emotional beats, not like more content in the same rhythm.

## Recommendation

Treat these as **manifesto moments**.

Give them:

- larger typography
- more vertical whitespace
- less surrounding copy
- stronger contrast from neighbouring sections
- potentially full-width treatment

## Dev note

The page should alternate between:

1. **information**
2. **pause / statement**
3. **information**
4. **visual or emotional beat**

This will improve rhythm and reduce the feeling of a continuous content stack.

---

# 3 / SIMPLIFY THE “TYPICAL DAY” STRUCTURE

## Issue

The daily schedule is clear in content, but visually it still feels slightly busy.

Each item currently risks having too many layers:

- number
- section label
- headline
- paragraph
- side note / decorative text

This makes scanning harder than necessary.

## Recommendation

Use one consistent pattern for every schedule item.

### Suggested structure

**01 / BREAKFAST**  
*Start slowly*  
Short explanation.

**02 / MORNING WORKSHOP**  
*Learn or discuss*  
Short explanation.

**03 / LUNCH**  
*Eat together*  
Short explanation.

**04 / FREE AFTERNOON**  
*Nothing scheduled*  
Short explanation.

**05 / DINNER**  
*Cook together*  
Short explanation.

**06 / EVENING**  
*Fire, games, conversation*  
Short explanation.

## Dev note

Keep the visual structure identical for all items.

Avoid adding extra labels unless they add real meaning.

The goal is immediate scanability.

---

# 4 / TIGHTEN THE WORKSHOP SECTION VISUALLY

## Issue

The two workshop categories are conceptually strong, but long numbered lists make the section feel heavier than it needs to.

The key distinction is:

- **PRACTICAL**
- **DISCUSSION / DEBATE**

That contrast should be visible immediately.

## Recommendation

Present them as two clearly distinct blocks or columns.

### Suggested structure

## PRACTICAL

Possible workshops:

- Campfire
- Navigation
- Hiking preparation
- Camp setup
- Food and nutrition
- Woodworking
- Traditional rural skills

## DISCUSSION / DEBATE

Possible topics:

- Relationships
- Gender
- Social media
- Climate
- Politics
- Consumption
- Success
- Adulthood

## Dev note

Prefer:

- two-column layout on desktop
- stacked layout on mobile
- strong category labels
- minimal numbering

The section should communicate the contrast between the two formats before the visitor reads the details.

---

# 5 / GIVE THE BOTTOM OF THE PAGE A STRONGER FINISH

## Issue

From the FAQ section onward, the page becomes dense and functional.

The FAQ is necessary, but it currently risks flattening the momentum before the final conversion section.

The final line:

**10–12 people. 7 days. 0 algorithms deciding what comes next.**

should feel like the emotional climax of the page.

## Recommendation

Create a clearer sequence:

### 1. FAQ
Useful, practical, lower-intensity information.

### 2. VISUAL RESET
Use whitespace, image, strong statement, or a large typographic break.

### 3. PILOT 001
Reintroduce energy.

### 4. SIGNUP
Make the CTA visually distinct from the FAQ.

### 5. FOOTER
Finish with a simple closing identity line.

## Dev note

Do not let the FAQ visually merge into the signup area.

The CTA should feel like a new chapter, not the continuation of a utility section.

---

# OVERALL FORM PRINCIPLE

The main issue is now **rhythm**, not clarity.

The page has strong content and a strong identity, but too many sections currently have similar visual weight.

The design should create more contrast between:

- **quiet information**
- **strong statements**
- **visual pauses**
- **conversion moments**

A useful principle for implementation:

> Not every section should shout at the same volume.

Use hierarchy, whitespace, scale, and section pacing to make the page feel more editorial and less like one continuous landing-page stack.


---

# 6 / FIX HERO NAVIGATION + MICROCOPY CONTRAST

## Issue

The landing frame contains several small details that have a strong tone and are worth keeping:

- `FIELD TEST 001`
- `CARPATHIANS / RO`
- `...LEAVING SIGNAL`

These help establish the field-manual / analogue identity immediately.

However, they are currently **too small and too low-contrast**, especially `...LEAVING SIGNAL`, which is white and difficult to read against the hero image.

The same problem affects the **main navigation**, where white menu text sits over a light background in parts of the hero image.

This creates an accessibility and legibility problem right at the top of the page.

## Recommendation

Keep the wording and placement concept, but improve visibility.

### Hero microcopy

Retain:

`FIELD TEST 001`  
`CARPATHIANS / RO`  
`...LEAVING SIGNAL`

But:

- increase font size slightly
- increase font weight or tracking clarity
- ensure sufficient contrast against the image
- avoid placing white text directly over bright image areas
- consider a subtle dark overlay, gradient, text shadow, or local background treatment
- preserve the understated tone without making the text disappear

`...LEAVING SIGNAL` in particular should remain a small detail, but it still needs to be **actually readable**.

## Navigation

The menu currently uses white text over a hero image that includes light areas.

This makes parts of the navigation difficult to read.

### Recommended options

Use one of these approaches:

1. add a subtle dark gradient or overlay behind the top navigation
2. switch the menu color dynamically based on scroll/background
3. place the nav inside a restrained translucent/dark strip
4. use the brand Charcoal for the menu when the hero area behind it is light

## Dev note

The hero should keep its visual lightness and documentary feel, but **readability must win over subtlety**.

The top of the page contains the brand’s first impression. These small details are valuable precisely because of their tone, so they should not be lost through insufficient contrast.

A useful rule:

> Small is fine. Invisible is not.
