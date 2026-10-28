const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
const fact = (label, value) => `<dt class="mono">${label}</dt><dd>${value}</dd>`;
const schedule = (title, copy) => `<h3>${title}</h3><p>${copy}</p>`;

const en = {
  meta: {
    title: "Unplug to Reconnect: Less digital. More analogue.",
    description: "One week offline in the Romanian Carpathians, giving young adults room to find their own direction through nature, practical experience, and real human connection."
  },
  access: { skip: "Skip to the real world", home: "Unplug to Reconnect, home", primaryNav: "Primary navigation", keyFacts: "Key facts", switch: "Digital to analogue", outcomes: "What you take home", route: "Expedition route", reset: "Less digital, more analogue" },
  nav: { menu: "Menu", week: "The week", activities: "What you do", expedition: "The expedition", glance: "At a glance", about: "The Why", join: "Join the pilot list", language: "Language" },
  hero: {
    imageAlt: "A small group carrying backpacks walks from a mountain village into the Carpathians at sunrise.",
    fieldTest: "FIELD TEST 001", location: "CARPATHIANS / RO", signalLeaving: "...LEAVING SIGNAL", signalGone: "...NO SIGNAL",
    eyebrow: "Unplug to Reconnect presents", title: "One week <em>offline.</em><br><em>Less digital.</em><br>More analogue.",
    lede: "A one-week outdoor experience for young adults in a rural corner of the Romanian Carpathians.", seeWeek: "See the week",
    people: "10–12 PEOPLE", days: "7 DAYS", ages: "AGES 18–25"
  },
  point: {
    index: "01 / THE POINT", title: "Step away from the digital noise for a week.",
    copy: "<p>At 18–25, many of us are making some of our first big decisions about study, work, relationships, where we want to live, and what kind of life we want.</p><p>At the same time, much of what we see, hear, and compare ourselves with comes through a screen.</p><p><strong>We don’t offer answers. We create a different environment where you might find your own direction, inspiration, or perspective through doing things, spending time in nature, and talking face-to-face with other people.</strong></p>",
    digital: "DIGITAL", analogue: "ANALOGUE", phone: "Your phone will survive a week without you."
  },
  outcomes: {
    resetTitle: "Digital reset", resetCopy: "Move technology away from the centre of everyday life for a week and experience what changes when your phone is no longer the default place to turn.",
    confidenceTitle: "Confidence", confidenceCopy: "Hike, cook, camp, learn practical skills, take responsibility, and discover more of what you can do for yourself.",
    connectionTitle: "Real connection", connectionCopy: "Live, work, eat, disagree, laugh, and spend time with a small group of people, face-to-face."
  },
  day: {
    index: "02 / A TYPICAL DAY AT CAMP", title: "A general rhythm, not a packed schedule.", intro: "Every day will be a little different, but most follow the same simple structure. There is time to learn, time to help run the camp, and plenty of time when nothing is scheduled.",
    breakfastLabel: "01 / BREAKFAST", breakfast: schedule("Start slowly", "Eat together, drink coffee or tea, check the weather, and get ready for the day."),
    workshopLabel: "02 / MORNING WORKSHOP", workshop: schedule("Learn or discuss", "A practical session where we learn by doing, or a discussion and debate session where we explore a topic together."),
    lunchLabel: "03 / LUNCH", lunch: schedule("Eat together", "A local cook prepares fresh, traditional regional dishes, the kind of generous food a Romanian grandmother might put on the table."),
    afternoonLabel: "04 / FREE AFTERNOON", afternoon: schedule("Nothing scheduled", "Read, sleep, walk, play cards, help in the garden, or talk. Learning to spend unstructured time without reaching for a phone is part of the experience."),
    dinnerLabel: "05 / DINNER", dinner: schedule("Cook together", "Everyone helps prepare dinner, clean up, and look after the camp."),
    eveningLabel: "06 / EVENING", evening: schedule("Campfire, games, conversation", "After dinner come music, conversations, and stars."),
    pauseLabel: "UNSTRUCTURED TIME / 01", pauseTitle: "BOREDOM<br>ALLOWED",
    imageAlt: "A child sits on a branch of an apple tree, looking out over a green valley.", caption: "AFTERNOON / NOTHING SCHEDULED / CAMERA 02"
  },
  workshops: {
    index: "03 / LEARN TOGETHER", eyebrow: "The morning workshop", title: "It can take<br><em>different forms.</em>",
    intro: "<p>Some mornings focus on <strong>practical skills</strong>, learning something by actually doing it.</p><p>Other mornings are <strong>discussion and debate workshops</strong>, a chance to explore a subject, hear different perspectives, ask questions, and form your own view.</p><p>The exact mix is not fixed. It depends on the participants, mentors, local people, and the place.</p>",
    format1: "FORMAT 01", practicalTitle: "Practical", possibleWorkshops: "Possible workshops",
    practicalList: list(["Campfire", "Navigation", "Hiking preparation", "Camp setup", "Food and nutrition", "Woodworking", "Traditional rural skills"]),
    practicalNote: "Led by mentors, craftspeople, or local people with practical experience.",
    format2: "FORMAT 02", discussionTitle: "Discussion / debate", possibleTopics: "Possible topics",
    discussionList: list(["Relationships", "Gender", "Social media", "Climate", "Politics", "Consumption", "Success", "Adulthood"]),
    discussionNote: "A mentor or moderator asks useful questions and creates space for different perspectives, not a ‘right’ answer.",
    role: "OUR ROLE: CREATE THE ENVIRONMENT / NOT DICTATE THE ANSWER"
  },
  mountain: {
    imageAlt: "A small group sits around a campfire beside tents beneath a starry mountain sky.", index: "04 / THE MOUNTAIN NIGHT", eyebrow: "Leave from camp. On foot.",
    title: "Spend one night up<br><em>in the mountains.</em>",
    copy: "<p>One of the defining experiences of the week is a one-night mountain expedition starting directly from camp.</p><p>We leave on foot carrying our backpacks, tents, sleeping bags, food, and equipment. We hike into the mountains, set up camp, cook, spend the evening outside, sleep there for the night, watch the sunrise, pack everything again, and walk back to base the next day.</p><p><strong>No excursion bus. No drive to a tourist attraction. We start and finish on foot from camp.</strong></p><p>This is a real challenge with intentional discomfort, but it is not survival training. Experienced leadership, proper planning, suitable equipment, and safety remain fundamental.</p>",
    pack: "PACK", walk: "WALK", camp: "CAMP", sunrise: "SUNRISE", home: "HOME", kit: "KIT PROVIDED", backpacks: "PROPER BACKPACKS", tents: "RELIABLE TENTS", sleepingBags: "SLEEPING BAGS / ~0°C", sharedGear: "SHARED CAMPING EQUIPMENT"
  },
  glance: {
    index: "05 / THE WEEK AT A GLANCE", title: "Everything important<br><em>in one place.</em>",
    who: fact("WHO", "Ages 18–25"), group: fact("GROUP", "10–12 participants + two hosts"), duration: fact("DURATION", "One week"),
    place: fact("PLACE", "A rural community in the Romanian Carpathians"), language: fact("LANGUAGE", "English"), dates: fact("DATES + PRICE", "To be announced for the pilot"),
    format: fact("FORMAT", "Outdoor living, shared meals, morning workshops, free afternoons, evenings together, and a one-night mountain expedition"),
    phones: fact("PHONES", "You can use your phone if you really need to, but we suggest keeping it stored and trying the week without it. The camp remains reachable if someone at home needs to contact you."),
    safety: fact("SAFETY", "The week includes hiking, outdoor living, and manageable discomfort. Appropriate equipment, planning, and experienced leadership are fundamental.")
  },
  faq: {
    index: "06 / ASK US", title: "Before you pack.",
    phoneQ: "Can I use my phone, and can home reach me?", phoneA: "Yes. You can use your phone if you really need to, but we suggest keeping it stored and trying the week without it. The camp remains reachable if someone at home needs to contact you.",
    experienceQ: "Do I need hiking or camping experience?", experienceA: "No previous hiking or camping experience is expected. The week is built around learning by doing, and the mountain route will be planned and adapted around the group so everyone can manage it.",
    survivalQ: "Is this survival training, and what is provided?", survivalA: "No. The mountain night is a planned outdoor challenge, not survival training. The camp provides proper hiking backpacks, reliable tents, sleeping bags suitable for temperatures around 0°C, and the necessary shared equipment.",
    costQ: "When is it, and how much will it cost?", costA: "Dates and pricing for the first pilot are not final yet. Join the pilot list and we will share the details when applications open.",
    englishQ: "Do I need to speak fluent English?", englishA: "No. English is the common language of the camp, but it does not need to be your first language. The point is to use English naturally while cooking, hiking, talking, and spending time together, not to speak perfectly.",
    sleepQ: "Where do we sleep?", sleepA: "The base camp uses simple outdoor accommodation in a rural setting, with tents and access to the basic facilities needed for the week. One night is spent camping in the mountains as part of the expedition. Exact accommodation details will be shared before booking.",
    foodQ: "What will we eat?", foodA: "Meals are part of the shared experience. Lunch is prepared fresh by a local cook, with an emphasis on simple food and local ingredients. We prepare dinner together. Dietary requirements and allergies will be collected during registration so the team can confirm what can be accommodated."
  },
  reset: { imageAlt: "Two canvas tents and a campfire glow beside a timber barn in a Maramureș garden.", title: "Less digital.<br><em>More analogue.</em>" },
  pilot: { stamp: "PILOT<br>001", eyebrow: "This starts small", title: "10–12 people.<br>7 days.<br><em>0 algorithms deciding what comes next.</em>" },
  signup: {
    index: "JOIN / PILOT 001", title: "Help us get the first pilot off the ground.", copy: "<p>Unplug to Reconnect is still at the beginning. Before we start adding all the details, we want to know if there are people out there who actually want this to happen.</p><p>We’re looking for the first <strong>50 people</strong> interested in the pilot.</p><p>Leave us your email, a few words if you want, and any question you’d like us to answer as the pilot takes shape.</p>",
    progress: "{count} / {goal} people interested", progressLabel: "People interested in the pilot", goalReached: "50+ people are interested. We made it.",
    emailLabel: "Your email", emailPlaceholder: "you@example.com",
    messageLabel: "Want to tell us something?", messageHint: "A few words of encouragement, what you like about the idea, or whatever comes to mind.",
    questionLabel: "What’s important for you to know?", questionHint: "Ask us anything you’d want answered before considering the pilot.",
    consent: "Yes, you can email me about Unplug to Reconnect and the first pilot.", note: "We’ll use your email to keep you updated about the project and the pilot. You can unsubscribe at any time.", privacyLink: "Privacy information",
    submit: "I’m interested", sending: "Sending…",
    doneTitle: "You’re one of the first.", doneThanks: "Thanks for raising your hand.", doneBody: "We’ll keep working on the pilot and let you know when there’s something worth sharing.", doneQuestion: "And if you left us a question: we’ll read it.",
    duplicate: "Looks like you’re already in. Good to have you here.",
    invalidEmail: "Enter a valid email address to join the list.", consentRequired: "Please tick the box so we can email you.", tooLong: "That’s a bit long. Please keep each note under 1,000 characters.", error: "Something went wrong on our side. Please try again in a moment."
  },
  letter: { imageAlt: "An older man in a white cap leans over a large pot on an outdoor stove, stirring it with a wooden spoon in an orchard.", caption: "FROM THE ARCHIVE", eyebrow: "OPEN LETTER / FROM ALEX", title: "An open letter from Alex about why we do this.", copy: "Basketball, software, and a week in the hills with my grandfather. This is not a rejection of technology. It is an invitation to step out of the noise for a while.", cta: "Read the letter", close: "Close" },
  footer: { line: "Let’s unplug for a moment from our digital worlds and reconnect with nature, people, and simple things.", less: "LESS DIGITAL.", more: "MORE ANALOGUE.", top: "BACK TO TOP ↑" }
};

const de = {
  meta: {
    title: "Unplug to Reconnect: Weniger digital. Mehr analog.",
    description: "Eine Woche offline in den rumänischen Karpaten, in der junge Erwachsene durch Natur, praktische Erfahrungen und echte menschliche Begegnungen Raum für ihren eigenen Weg finden."
  },
  access: { skip: "Direkt zur echten Welt", home: "Unplug to Reconnect, Startseite", primaryNav: "Hauptnavigation", keyFacts: "Wichtige Fakten", switch: "Von digital zu analog", outcomes: "Was du mitnimmst", route: "Route der Expedition", reset: "Weniger digital, mehr analog" },
  nav: { menu: "Menü", week: "Die Woche", activities: "Was du machst", expedition: "Die Expedition", glance: "Auf einen Blick", about: "Das Warum", join: "Zur Pilotliste", language: "Sprache" },
  hero: {
    imageAlt: "Eine kleine Gruppe mit Rucksäcken wandert bei Sonnenaufgang aus einem Bergdorf in die Karpaten.",
    fieldTest: "FELDTEST 001", location: "KARPATEN / RO", signalLeaving: "...SIGNAL WIRD SCHWÄCHER", signalGone: "...KEIN SIGNAL",
    eyebrow: "Unplug to Reconnect präsentiert", title: "Eine Woche <em>offline.</em><br><em>Weniger digital.</em><br>Mehr analog.",
    lede: "Ein einwöchiges Outdoor-Erlebnis für junge Erwachsene in einer ländlichen Gegend der rumänischen Karpaten.", seeWeek: "Die Woche ansehen",
    people: "10–12 PERSONEN", days: "7 TAGE", ages: "18–25 JAHRE"
  },
  point: {
    index: "01 / WORUM ES GEHT", title: "Eine Woche Abstand vom digitalen Rauschen.",
    copy: "<p>Mit 18 bis 25 treffen viele von uns einige der ersten großen Entscheidungen über Studium, Arbeit, Beziehungen, den Ort, an dem wir leben möchten, und die Art von Leben, die wir führen wollen.</p><p>Gleichzeitig erreicht uns vieles von dem, was wir sehen, hören und womit wir uns vergleichen, über einen Bildschirm.</p><p><strong>Wir liefern keine Antworten. Wir schaffen eine andere Umgebung, in der du durch praktisches Tun, Zeit in der Natur und persönliche Gespräche deinen eigenen Weg, Inspiration oder eine neue Perspektive finden kannst.</strong></p>",
    digital: "DIGITAL", analogue: "ANALOG", phone: "Dein Handy überlebt eine Woche ohne dich."
  },
  outcomes: {
    resetTitle: "Digitaler Neustart", resetCopy: "Rücke Technologie für eine Woche aus dem Mittelpunkt deines Alltags und erlebe, was sich verändert, wenn dein Handy nicht mehr der automatische Griffpunkt ist.",
    confidenceTitle: "Selbstvertrauen", confidenceCopy: "Wandern, kochen, campen, praktische Fähigkeiten lernen, Verantwortung übernehmen und entdecken, was du selbst schaffen kannst.",
    connectionTitle: "Echte Verbindung", connectionCopy: "Mit einer kleinen Gruppe leben, arbeiten, essen, diskutieren, lachen und Zeit verbringen, von Angesicht zu Angesicht."
  },
  day: {
    index: "02 / EIN TYPISCHER TAG IM CAMP", title: "Ein gemeinsamer Rhythmus, kein voller Zeitplan.", intro: "Jeder Tag ist ein wenig anders, doch die meisten folgen derselben einfachen Struktur. Es gibt Zeit zum Lernen, Zeit, das Camp mitzugestalten, und viel Zeit, in der nichts geplant ist.",
    breakfastLabel: "01 / FRÜHSTÜCK", breakfast: schedule("Langsam anfangen", "Gemeinsam essen, Kaffee oder Tee trinken, das Wetter prüfen und sich auf den Tag vorbereiten."),
    workshopLabel: "02 / VORMITTAGSWORKSHOP", workshop: schedule("Lernen oder diskutieren", "Eine praktische Einheit, in der wir durch Tun lernen, oder eine Gesprächs- und Debattenrunde, in der wir gemeinsam ein Thema erkunden."),
    lunchLabel: "03 / MITTAGESSEN", lunch: schedule("Gemeinsam essen", "Eine Köchin oder ein Koch aus der Region bereitet frische, traditionelle Gerichte zu, so großzügig und bodenständig, wie sie eine rumänische Großmutter auf den Tisch stellen würde."),
    afternoonLabel: "04 / FREIER NACHMITTAG", afternoon: schedule("Nichts geplant", "Lesen, schlafen, spazieren, Karten spielen, im Garten helfen oder reden. Unstrukturierte Zeit zu verbringen, ohne automatisch zum Handy zu greifen, gehört zur Erfahrung."),
    dinnerLabel: "05 / ABENDESSEN", dinner: schedule("Gemeinsam kochen", "Alle helfen beim Abendessen, beim Aufräumen und dabei, das Camp in Ordnung zu halten."),
    eveningLabel: "06 / ABEND", evening: schedule("Lagerfeuer, Spiele, Gespräche", "Nach dem Essen folgen Musik, Gespräche und Sterne."),
    pauseLabel: "FREIE ZEIT / 01", pauseTitle: "LANGEWEILE<br>ERLAUBT",
    imageAlt: "Ein Kind sitzt auf einem Ast eines Apfelbaums und blickt über ein grünes Tal.", caption: "NACHMITTAG / NICHTS GEPLANT / KAMERA 02"
  },
  workshops: {
    index: "03 / GEMEINSAM LERNEN", eyebrow: "Der Vormittagsworkshop", title: "Er kann<br><em>verschiedene Formen haben.</em>",
    intro: "<p>An manchen Vormittagen geht es um <strong>praktische Fähigkeiten</strong>, wir lernen etwas, indem wir es wirklich tun.</p><p>An anderen Vormittagen gibt es <strong>Gesprächs- und Debattenworkshops</strong>. Wir erkunden ein Thema, hören unterschiedliche Perspektiven, stellen Fragen und bilden uns eine eigene Meinung.</p><p>Die genaue Mischung steht nicht fest. Sie hängt von den Teilnehmenden, Mentorinnen und Mentoren, den Menschen vor Ort und dem Ort selbst ab.</p>",
    format1: "FORMAT 01", practicalTitle: "Praktisch", possibleWorkshops: "Mögliche Workshops",
    practicalList: list(["Lagerfeuer", "Navigation", "Wandervorbereitung", "Campaufbau", "Ernährung", "Holzarbeit", "Traditionelle ländliche Fertigkeiten"]),
    practicalNote: "Geleitet von Mentorinnen und Mentoren, Handwerksleuten oder Menschen aus der Region mit praktischer Erfahrung.",
    format2: "FORMAT 02", discussionTitle: "Gespräch / Debatte", possibleTopics: "Mögliche Themen",
    discussionList: list(["Beziehungen", "Geschlecht", "Soziale Medien", "Klima", "Politik", "Konsum", "Erfolg", "Erwachsenwerden"]),
    discussionNote: "Eine Mentorin, ein Mentor oder eine Moderation stellt hilfreiche Fragen und schafft Raum für unterschiedliche Perspektiven, nicht für eine einzige ‘richtige’ Antwort.",
    role: "UNSERE ROLLE: DEN RAUM SCHAFFEN / NICHT DIE ANTWORT VORGEBEN"
  },
  mountain: {
    imageAlt: "Eine kleine Gruppe sitzt neben Zelten unter einem sternklaren Berghimmel am Lagerfeuer.", index: "04 / DIE NACHT AM BERG", eyebrow: "Zu Fuß direkt vom Camp.",
    title: "Eine Nacht<br><em>in den Bergen.</em>",
    copy: "<p>Eine der prägendsten Erfahrungen der Woche ist eine eintägige Bergexpedition mit Übernachtung, die direkt am Camp beginnt.</p><p>Wir gehen zu Fuß los und tragen Rucksäcke, Zelte, Schlafsäcke, Essen und Ausrüstung selbst. Wir wandern in die Berge, bauen das Camp auf, kochen, verbringen den Abend draußen, schlafen dort, sehen den Sonnenaufgang, packen alles wieder ein und gehen am nächsten Tag zurück zur Basis.</p><p><strong>Kein Ausflugsbus. Keine Fahrt zu einer Touristenattraktion. Wir starten und enden zu Fuß am Camp.</strong></p><p>Das ist eine echte Herausforderung mit bewusstem Komfortverzicht, aber kein Survivaltraining. Erfahrene Leitung, sorgfältige Planung, passende Ausrüstung und Sicherheit bleiben grundlegend.</p>",
    pack: "PACKEN", walk: "GEHEN", camp: "CAMP", sunrise: "SONNENAUFGANG", home: "ZURÜCK", kit: "AUSRÜSTUNG INKLUSIVE", backpacks: "GEEIGNETE RUCKSÄCKE", tents: "ZUVERLÄSSIGE ZELTE", sleepingBags: "SCHLAFSÄCKE / ~0°C", sharedGear: "GEMEINSAME CAMPAUSRÜSTUNG"
  },
  glance: {
    index: "05 / DIE WOCHE AUF EINEN BLICK", title: "Alles Wichtige<br><em>an einem Ort.</em>",
    who: fact("WER", "18–25 Jahre"), group: fact("GRUPPE", "10–12 Teilnehmende + zwei Gastgebende"), duration: fact("DAUER", "Eine Woche"),
    place: fact("ORT", "Eine ländliche Gemeinde in den rumänischen Karpaten"), language: fact("SPRACHE", "Englisch"), dates: fact("TERMINE + PREIS", "Für den Pilotdurchlauf noch offen"),
    format: fact("FORMAT", "Leben im Freien, gemeinsame Mahlzeiten, Vormittagsworkshops, freie Nachmittage, gemeinsame Abende und eine Bergexpedition mit Übernachtung"),
    phones: fact("HANDYS", "Du kannst dein Handy benutzen, wenn es wirklich nötig ist. Wir empfehlen jedoch, es sicher verwahrt zu lassen und die Woche ohne Handy auszuprobieren. Das Camp bleibt erreichbar, falls dich jemand von zu Hause kontaktieren muss."),
    safety: fact("SICHERHEIT", "Die Woche umfasst Wandern, Leben im Freien und gut bewältigbaren Komfortverzicht. Geeignete Ausrüstung, Planung und erfahrene Leitung sind grundlegend.")
  },
  faq: {
    index: "06 / FRAGEN", title: "Bevor du packst.",
    phoneQ: "Kann ich mein Handy benutzen und kann mich jemand von zu Hause erreichen?", phoneA: "Ja. Du kannst dein Handy benutzen, wenn es wirklich nötig ist. Wir empfehlen jedoch, es sicher verwahrt zu lassen und die Woche ohne Handy auszuprobieren. Das Camp bleibt erreichbar, falls dich jemand von zu Hause kontaktieren muss.",
    experienceQ: "Brauche ich Wander- oder Campingerfahrung?", experienceA: "Vorerfahrung im Wandern oder Campen wird nicht erwartet. Die Woche setzt auf Lernen durch Tun. Die Bergroute wird an die Gruppe angepasst, damit alle sie bewältigen können.",
    survivalQ: "Ist das Survivaltraining und welche Ausrüstung wird gestellt?", survivalA: "Nein. Die Bergnacht ist eine geplante Outdoor-Herausforderung, kein Survivaltraining. Das Camp stellt geeignete Wanderrucksäcke, zuverlässige Zelte, Schlafsäcke für Temperaturen um 0°C und die notwendige gemeinsame Ausrüstung bereit.",
    costQ: "Wann findet es statt und was kostet es?", costA: "Termine und Preis für den ersten Pilotdurchlauf stehen noch nicht fest. Trag dich in die Pilotliste ein, dann teilen wir die Details, sobald die Bewerbungsphase beginnt.",
    englishQ: "Muss ich fließend Englisch sprechen?", englishA: "Nein. Englisch ist die gemeinsame Sprache im Camp, muss aber nicht deine Muttersprache sein. Es geht darum, Englisch beim Kochen, Wandern, Reden und Zusammensein natürlich zu nutzen, nicht darum, perfekt zu sprechen.",
    sleepQ: "Wo schlafen wir?", sleepA: "Das Basiscamp bietet einfache Outdoor-Unterkünfte in ländlicher Umgebung, mit Zelten und Zugang zu den grundlegenden Einrichtungen für die Woche. Eine Nacht verbringen wir während der Expedition in den Bergen. Die genauen Details zur Unterkunft folgen vor der Buchung.",
    foodQ: "Was werden wir essen?", foodA: "Mahlzeiten sind Teil der gemeinsamen Erfahrung. Das Mittagessen wird von einer Köchin oder einem Koch aus der Region frisch zubereitet, mit einfachen Speisen und lokalen Zutaten. Das Abendessen kochen wir gemeinsam. Ernährungsbedürfnisse und Allergien werden bei der Anmeldung abgefragt, damit das Team bestätigen kann, was möglich ist."
  },
  reset: { imageAlt: "Zwei Leinwandzelte und ein Lagerfeuer leuchten neben einer Holzscheune in einem Garten in Maramureș.", title: "Weniger digital.<br><em>Mehr analog.</em>" },
  pilot: { stamp: "PILOT<br>001", eyebrow: "Wir fangen klein an", title: "10–12 Personen.<br>7 Tage.<br><em>0 Algorithmen, die bestimmen, was als Nächstes kommt.</em>" },
  signup: {
    index: "MITMACHEN / PILOT 001", title: "Hilf uns, den ersten Pilot auf den Weg zu bringen.", copy: "<p>Unplug to Reconnect steht noch ganz am Anfang. Bevor wir alle Details ausarbeiten, wollen wir wissen, ob es da draußen Menschen gibt, die sich das wirklich wünschen.</p><p>Wir suchen die ersten <strong>50 Menschen</strong>, die sich für den Pilot interessieren.</p><p>Hinterlass uns deine E-Mail-Adresse, ein paar Worte, wenn du magst, und jede Frage, die wir beantworten sollen, während der Pilot Gestalt annimmt.</p>",
    progress: "{count} / {goal} Interessierte", progressLabel: "Menschen, die sich für den Pilot interessieren", goalReached: "Über 50 Menschen sind interessiert. Wir haben es geschafft.",
    emailLabel: "Deine E-Mail", emailPlaceholder: "du@beispiel.de",
    messageLabel: "Möchtest du uns etwas sagen?", messageHint: "Ein paar aufmunternde Worte, was dir an der Idee gefällt, oder einfach, was dir gerade einfällt.",
    questionLabel: "Was ist dir wichtig zu wissen?", questionHint: "Frag uns alles, was du beantwortet haben möchtest, bevor du über den Pilot nachdenkst.",
    consent: "Ja, ihr dürft mir E-Mails zu Unplug to Reconnect und zum ersten Pilot schicken.", note: "Wir nutzen deine E-Mail-Adresse, um dich über das Projekt und den Pilot auf dem Laufenden zu halten. Du kannst dich jederzeit abmelden.", privacyLink: "Datenschutzhinweise",
    submit: "Ich bin interessiert", sending: "Wird gesendet…",
    doneTitle: "Du gehörst zu den Ersten.", doneThanks: "Danke, dass du die Hand gehoben hast.", doneBody: "Wir arbeiten weiter am Pilot und melden uns, wenn es etwas zu berichten gibt.", doneQuestion: "Und wenn du uns eine Frage hinterlassen hast: Wir lesen sie.",
    duplicate: "Du bist schon dabei. Schön, dass du hier bist.",
    invalidEmail: "Gib eine gültige E-Mail-Adresse ein.", consentRequired: "Bitte setz das Häkchen, damit wir dir schreiben dürfen.", tooLong: "Das ist etwas lang. Bitte halte jeden Text unter 1.000 Zeichen.", error: "Bei uns ist etwas schiefgelaufen. Bitte versuch es gleich noch einmal."
  },
  letter: { imageAlt: "Ein älterer Mann mit weißer Mütze beugt sich in einem Obstgarten über einen großen Topf auf einem Outdoor-Herd und rührt mit einem Holzlöffel.", caption: "AUS DEM ARCHIV", eyebrow: "OFFENER BRIEF / VON ALEX", title: "Ein offener Brief von Alex über das Warum hinter Unplug to Reconnect.", copy: "Basketball, Software und eine Woche in den Hügeln mit meinem Großvater. Das ist keine Absage an Technologie. Es ist eine Einladung, für eine Weile aus dem Lärm herauszutreten.", cta: "Den Brief lesen", close: "Schließen" },
  footer: { line: "Lass uns für einen Moment von unseren digitalen Welten abschalten und uns wieder mit Natur, Menschen und einfachen Dingen verbinden.", less: "WENIGER DIGITAL.", more: "MEHR ANALOG.", top: "NACH OBEN ↑" }
};

const fr = {
  meta: {
    title: "Unplug to Reconnect : Moins numérique. Plus analogique.",
    description: "Une semaine hors ligne dans les Carpates roumaines, pour permettre aux jeunes adultes de trouver leur propre direction grâce à la nature, à l’expérience pratique et aux liens humains."
  },
  access: { skip: "Aller directement au monde réel", home: "Unplug to Reconnect, accueil", primaryNav: "Navigation principale", keyFacts: "Informations clés", switch: "Du numérique à l’analogique", outcomes: "Ce que tu emportes", route: "Itinéraire de l’expédition", reset: "Moins numérique, plus analogique" },
  nav: { menu: "Menu", week: "La semaine", activities: "Ce que tu vivras", expedition: "L’expédition", glance: "En bref", about: "Le pourquoi", join: "Rejoindre la liste pilote", language: "Langue" },
  hero: {
    imageAlt: "Un petit groupe avec des sacs à dos quitte un village de montagne pour marcher dans les Carpates au lever du soleil.",
    fieldTest: "TEST TERRAIN 001", location: "CARPATES / RO", signalLeaving: "...PERTE DU SIGNAL", signalGone: "...AUCUN SIGNAL",
    eyebrow: "Unplug to Reconnect présente", title: "Une semaine <em>hors ligne.</em><br><em>Moins numérique.</em><br>Plus analogique.",
    lede: "Une expérience d’une semaine en plein air pour les jeunes adultes, dans un coin rural des Carpates roumaines.", seeWeek: "Voir la semaine",
    people: "10–12 PERSONNES", days: "7 JOURS", ages: "18–25 ANS"
  },
  point: {
    index: "01 / L’IDÉE", title: "Une semaine loin du bruit numérique.",
    copy: "<p>Entre 18 et 25 ans, beaucoup d’entre nous prennent leurs premières grandes décisions : les études, le travail, les relations, l’endroit où vivre, la vie qu’on veut mener.</p><p>Et en même temps, une grande partie de ce qu’on voit, entend et utilise pour se comparer aux autres passe par un écran.</p><p><strong>On ne donne pas de réponses. On crée un autre cadre où tu peux trouver ta propre direction, de l’inspiration ou un nouveau point de vue, en faisant des choses concrètes, en passant du temps dans la nature et en parlant face à face avec d’autres personnes.</strong></p>",
    digital: "NUMÉRIQUE", analogue: "ANALOGIQUE", phone: "Ton téléphone survivra à une semaine sans toi."
  },
  outcomes: {
    resetTitle: "Pause numérique", resetCopy: "Mets la technologie hors du centre de ta vie quotidienne pendant une semaine et vois ce qui change quand ton téléphone n’est plus ton réflexe par défaut.",
    confidenceTitle: "Confiance", confidenceCopy: "Marcher, cuisiner, camper, apprendre des gestes utiles, prendre des responsabilités et découvrir tout ce dont tu es capable par toi-même.",
    connectionTitle: "Liens réels", connectionCopy: "Vivre, travailler, manger, ne pas être d’accord, rire et passer du temps avec un petit groupe, face à face."
  },
  day: {
    index: "02 / UNE JOURNÉE TYPE AU CAMP", title: "Un rythme général, pas un programme chargé.", intro: "Chaque journée sera un peu différente, mais la plupart suivent la même structure simple. Il y a du temps pour apprendre, du temps pour participer à la vie du camp et beaucoup de temps où rien n’est prévu.",
    breakfastLabel: "01 / PETIT-DÉJEUNER", breakfast: schedule("Commencer doucement", "Manger ensemble, boire un café ou un thé, regarder la météo et se préparer pour la journée."),
    workshopLabel: "02 / ATELIER DU MATIN", workshop: schedule("Apprendre ou discuter", "Une séance pratique où nous apprenons en faisant, ou un atelier de discussion et de débat où nous explorons un sujet ensemble."),
    lunchLabel: "03 / DÉJEUNER", lunch: schedule("Manger ensemble", "Une personne de la région prépare des plats traditionnels frais et généreux, comme ceux qu’une grand-mère roumaine servirait à table."),
    afternoonLabel: "04 / APRÈS-MIDI LIBRE", afternoon: schedule("Rien de prévu", "Lire, dormir, marcher, jouer aux cartes, aider au jardin ou parler. Apprendre à vivre un temps non structuré sans prendre automatiquement son téléphone fait partie de l’expérience."),
    dinnerLabel: "05 / DÎNER", dinner: schedule("Cuisiner ensemble", "Tout le monde aide à préparer le dîner, à ranger et à prendre soin du camp."),
    eveningLabel: "06 / SOIRÉE", evening: schedule("Feu de camp, jeux, discussions", "Après le dîner viennent la musique, les conversations et les étoiles."),
    pauseLabel: "TEMPS LIBRE / 01", pauseTitle: "ENNUI<br>AUTORISÉ",
    imageAlt: "Un enfant est assis sur une branche de pommier et regarde une vallée verte.", caption: "APRÈS-MIDI / RIEN DE PRÉVU / APPAREIL 02"
  },
  workshops: {
    index: "03 / APPRENDRE ENSEMBLE", eyebrow: "L’atelier du matin", title: "Il peut prendre<br><em>différentes formes.</em>",
    intro: "<p>Certains matins sont consacrés aux <strong>compétences pratiques</strong>, apprendre quelque chose en le faisant réellement.</p><p>D’autres matins proposent des <strong>ateliers de discussion et de débat</strong>, pour explorer un sujet, entendre différents points de vue, poser des questions et construire sa propre opinion.</p><p>Le mélange exact n’est pas fixé. Il dépend des participants, des mentors, des habitants et du lieu.</p>",
    format1: "FORMAT 01", practicalTitle: "Pratique", possibleWorkshops: "Ateliers possibles",
    practicalList: list(["Feu de camp", "Orientation", "Préparation d’une randonnée", "Installation du camp", "Alimentation et nutrition", "Travail du bois", "Savoir-faire ruraux traditionnels"]),
    practicalNote: "Animés par des mentors, des artisans ou des habitants ayant une expérience pratique.",
    format2: "FORMAT 02", discussionTitle: "Discussion / débat", possibleTopics: "Sujets possibles",
    discussionList: list(["Relations", "Genre", "Réseaux sociaux", "Climat", "Politique", "Consommation", "Réussite", "Entrée dans l’âge adulte"]),
    discussionNote: "Un mentor ou une personne qui modère pose de bonnes questions et ouvre la place à des points de vue différents, sans imposer une réponse « juste ».",
    role: "NOTRE RÔLE : CRÉER L’ENVIRONNEMENT / PAS DICTER LA RÉPONSE"
  },
  mountain: {
    imageAlt: "Un petit groupe est assis autour d’un feu de camp, près de tentes, sous un ciel de montagne étoilé.", index: "04 / LA NUIT EN MONTAGNE", eyebrow: "Départ du camp. À pied.",
    title: "Passe une nuit<br><em>en montagne.</em>",
    copy: "<p>L’une des expériences marquantes de la semaine est une expédition d’une nuit en montagne, au départ direct du camp.</p><p>Nous partons à pied avec nos sacs à dos, tentes, sacs de couchage, nourriture et matériel. Nous marchons dans les montagnes, installons le camp, cuisinons, passons la soirée dehors, dormons sur place, regardons le lever du soleil, rangeons tout et revenons à pied à la base le lendemain.</p><p><strong>Pas de bus touristique. Pas de trajet vers une attraction. Nous partons du camp et y revenons à pied.</strong></p><p>C’est un vrai défi qui comprend un inconfort volontaire, mais ce n’est pas un entraînement de survie. Un encadrement expérimenté, une bonne préparation, un équipement adapté et la sécurité restent essentiels.</p>",
    pack: "PRÉPARER", walk: "MARCHER", camp: "CAMPER", sunrise: "LEVER DU SOLEIL", home: "RETOUR", kit: "MATÉRIEL FOURNI", backpacks: "SACS À DOS ADAPTÉS", tents: "TENTES FIABLES", sleepingBags: "SACS DE COUCHAGE / ~0°C", sharedGear: "MATÉRIEL DE CAMPING COLLECTIF"
  },
  glance: {
    index: "05 / LA SEMAINE EN BREF", title: "Tout ce qui compte<br><em>au même endroit.</em>",
    who: fact("POUR QUI", "18–25 ans"), group: fact("GROUPE", "10–12 participants + deux hôtes"), duration: fact("DURÉE", "Une semaine"),
    place: fact("LIEU", "Une communauté rurale des Carpates roumaines"), language: fact("LANGUE", "Anglais"), dates: fact("DATES + PRIX", "À annoncer pour le projet pilote"),
    format: fact("FORMAT", "Vie en plein air, repas partagés, ateliers le matin, après-midis libres, soirées ensemble et expédition d’une nuit en montagne"),
    phones: fact("TÉLÉPHONES", "Tu peux utiliser ton téléphone si tu en as vraiment besoin, mais on te propose de le laisser en sécurité et d’essayer la semaine sans lui. Le camp reste joignable si un proche doit te contacter."),
    safety: fact("SÉCURITÉ", "La semaine comprend de la randonnée, de la vie en plein air et un inconfort gérable. Un équipement adapté, une bonne préparation et un encadrement expérimenté sont essentiels.")
  },
  faq: {
    index: "06 / QUESTIONS", title: "Avant de faire ton sac.",
    phoneQ: "Puis-je utiliser mon téléphone, et mes proches peuvent-ils me joindre ?", phoneA: "Oui. Tu peux utiliser ton téléphone si tu en as vraiment besoin, mais on te propose de le laisser en sécurité et d’essayer la semaine sans lui. Le camp reste joignable si un proche doit te contacter.",
    experienceQ: "Faut-il avoir de l’expérience en randonnée ou en camping ?", experienceA: "Aucune expérience préalable de randonnée ou de camping n’est requise. La semaine repose sur l’apprentissage par la pratique. Le parcours en montagne sera préparé et adapté au groupe afin que tout le monde puisse le réaliser.",
    survivalQ: "S’agit-il d’un stage de survie et quel matériel est fourni ?", survivalA: "Non. La nuit en montagne est un défi en plein air planifié, pas un stage de survie. Le camp fournit des sacs à dos adaptés, des tentes fiables, des sacs de couchage convenant à des températures proches de 0°C et le matériel collectif nécessaire.",
    costQ: "Quand aura lieu le séjour et combien coûtera-t-il ?", costA: "Les dates et le prix du premier projet pilote ne sont pas encore définitifs. Rejoins la liste pilote et on te donnera tous les détails à l’ouverture des candidatures.",
    englishQ: "Dois-je parler anglais couramment ?", englishA: "Non. L’anglais est la langue commune du camp, mais ce n’est pas obligé d’être ta langue maternelle. L’idée, c’est de l’utiliser naturellement en cuisinant, en marchant, en discutant et en passant du temps ensemble, pas de le parler parfaitement.",
    sleepQ: "Où dormons-nous ?", sleepA: "Le camp de base propose un hébergement simple en plein air dans un environnement rural, avec des tentes et l’accès aux installations de base nécessaires pour la semaine. Une nuit est passée en montagne pendant l’expédition. Les détails précis seront communiqués avant la réservation.",
    foodQ: "Qu’allons-nous manger ?", foodA: "Les repas font partie de l’expérience collective. Le déjeuner est préparé frais par une personne de la région, avec des plats simples et des ingrédients locaux. Nous préparons le dîner ensemble. Les régimes alimentaires et allergies seront recueillis lors de l’inscription afin que l’équipe puisse confirmer ce qui peut être adapté."
  },
  reset: { imageAlt: "Deux tentes en toile et un feu de camp brillent près d’une grange en bois dans un jardin du Maramureș.", title: "Moins numérique.<br><em>Plus analogique.</em>" },
  pilot: { stamp: "PILOTE<br>001", eyebrow: "Tout commence à petite échelle", title: "10–12 personnes.<br>7 jours.<br><em>0 algorithme pour décider de la suite.</em>" },
  signup: {
    index: "REJOINDRE / PILOTE 001", title: "Aide-nous à lancer le premier pilote.", copy: "<p>Unplug to Reconnect en est encore à ses débuts. Avant d’ajouter tous les détails, on veut savoir s’il y a vraiment des personnes qui ont envie que ça existe.</p><p>On cherche les <strong>50 premières personnes</strong> intéressées par le pilote.</p><p>Laisse-nous ton e-mail, quelques mots si tu veux, et toute question à laquelle tu aimerais qu’on réponde à mesure que le pilote prend forme.</p>",
    progress: "{count} / {goal} personnes intéressées", progressLabel: "Personnes intéressées par le pilote", goalReached: "Plus de 50 personnes sont intéressées. On y est arrivés.",
    emailLabel: "Ton e-mail", emailPlaceholder: "toi@exemple.fr",
    messageLabel: "Un mot à nous dire ?", messageHint: "Quelques mots d’encouragement, ce que tu aimes dans l’idée, ou ce qui te passe par la tête.",
    questionLabel: "Qu’est-ce qui est important pour toi de savoir ?", questionHint: "Pose-nous la question à laquelle tu voudrais une réponse avant de considérer le pilote.",
    consent: "Oui, vous pouvez m’écrire à propos d’Unplug to Reconnect et du premier pilote.", note: "On utilisera ton e-mail pour te tenir au courant du projet et du pilote. Tu peux te désabonner à tout moment.", privacyLink: "Informations sur la confidentialité",
    submit: "Ça m’intéresse", sending: "Envoi en cours…",
    doneTitle: "Tu fais partie des premiers.", doneThanks: "Merci d’avoir levé la main.", doneBody: "On continue de travailler sur le pilote et on te prévient dès qu’il y a quelque chose à partager.", doneQuestion: "Et si tu nous as laissé une question : on la lira.",
    duplicate: "On dirait que tu es déjà dans la liste. Content de t’avoir ici.",
    invalidEmail: "Saisis une adresse e-mail valide.", consentRequired: "Coche la case pour que nous puissions t’écrire.", tooLong: "C’est un peu long. Garde chaque texte sous 1 000 caractères.", error: "Un problème est survenu de notre côté. Réessaie dans un instant."
  },
  letter: { imageAlt: "Un homme âgé coiffé d’une casquette blanche se penche sur une grande marmite posée sur un réchaud en plein air et la remue avec une cuillère en bois, dans un verger.", caption: "DES ARCHIVES", eyebrow: "LETTRE OUVERTE / D’ALEX", title: "Une lettre ouverte d’Alex sur les raisons d’être d’Unplug to Reconnect.", copy: "Basket, informatique et une semaine dans les collines avec mon grand-père. Ce n’est pas un rejet de la technologie. C’est une invitation à sortir du bruit pendant un moment.", cta: "Lire la lettre", close: "Fermer" },
  footer: { line: "Déconnectons-nous un moment de nos mondes numériques pour nous reconnecter à la nature, aux autres et aux choses simples.", less: "MOINS NUMÉRIQUE.", more: "PLUS ANALOGIQUE.", top: "RETOUR EN HAUT ↑" }
};

const ro = {
  meta: {
    title: "Unplug to Reconnect: Mai puțin digital. Mai mult analog.",
    description: "O săptămână offline în Carpații României, pentru tineri între 18 și 25 de ani: natură, lucruri făcute cu mâna ta și oameni adevărați, față în față."
  },
  access: { skip: "Treci direct în lumea reală", home: "Unplug to Reconnect, pagina principală", primaryNav: "Navigare principală", keyFacts: "Pe scurt, ce trebuie să știi", switch: "De la digital la analog", outcomes: "Ce iei cu tine acasă", route: "Traseul expediției", reset: "Mai puțin digital, mai mult analog" },
  nav: { menu: "Meniu", week: "Săptămâna", activities: "Ce facem", expedition: "Expediția", glance: "Pe scurt", about: "De ce", join: "Înscrie-te pe lista pilot", language: "Limbă" },
  hero: {
    imageAlt: "Un grup mic, cu rucsacurile în spate, pornește la răsărit dintr-un sat de munte spre Carpați.",
    fieldTest: "TEST PE TEREN 001", location: "CARPAȚI / RO", signalLeaving: "...SE PIERDE SEMNALUL", signalGone: "...FĂRĂ SEMNAL",
    eyebrow: "Unplug to Reconnect prezintă", title: "O săptămână <em>offline.</em><br><em>Mai puțin digital.</em><br>Mai mult analog.",
    lede: "O săptămână în aer liber pentru tineri, într-un sat mândru din Carpații României.", seeWeek: "Vezi săptămâna",
    people: "10–12 OAMENI", days: "7 ZILE", ages: "18–25 ANI"
  },
  point: {
    index: "01 / DE CE", title: "O săptămână departe de zgomotul digital.",
    copy: "<p>Între 18 și 25 de ani, mulți dintre noi începem să luăm primele decizii mari: ce studiem, ce muncă facem, cu cine ne legăm, unde vrem să trăim și ce fel de viață ne dorim.</p><p>Și tot atunci, mare parte din ce vedem, auzim și cu ce ne comparăm vine printr-un ecran.</p><p><strong>Noi nu dăm răspunsuri. Facem loc unui alt fel de mediu, în care îți poți găsi singur drumul, o idee sau o perspectivă nouă: făcând lucruri cu mâinile tale, stând în natură și vorbind cu alți oameni, față în față.</strong></p>",
    digital: "DIGITAL", analogue: "ANALOG", phone: "Telefonul tău se descurcă și o săptămână fără tine."
  },
  outcomes: {
    resetTitle: "Pauză de la digital", resetCopy: "Dă tehnologia la o parte o săptămână și vezi ce se schimbă când telefonul nu mai e primul lucru după care întinzi mâna.",
    confidenceTitle: "Încredere", confidenceCopy: "Faci drumeții, gătești, dormi în cort, înveți lucruri practice, îți asumi răspunderi și descoperi cât de multe poți face singur.",
    connectionTitle: "Legături adevărate", connectionCopy: "Trăiești, muncești, mănânci, te contrazici, râzi și stai la un loc cu un grup mic de oameni, față în față."
  },
  day: {
    index: "02 / O ZI LA TABĂRĂ", title: "Un ritm, nu un program încărcat.", intro: "Fiecare zi iese puțin altfel, dar cele mai multe merg pe aceeași schemă simplă. E timp de învățat, timp de dat o mână de ajutor prin tabără și destul timp în care nu ai nimic de făcut.",
    breakfastLabel: "01 / MICUL DEJUN", breakfast: schedule("Începem încet", "Mâncăm împreună, bem o cafea sau un ceai, ne uităm cum e vremea și ne pregătim de zi."),
    workshopLabel: "02 / ATELIERUL DE DIMINEAȚĂ", workshop: schedule("Învățăm sau discutăm", "Ori facem ceva practic, învățând prin făcut, ori stăm la o discuție și o dezbatere, unde luăm un subiect la întors împreună."),
    lunchLabel: "03 / PRÂNZ", lunch: schedule("Mâncăm împreună", "Cineva din sat gătește mâncare proaspătă, fain și din belșug, așa cum ți-ar pune buna pe masă."),
    afternoonLabel: "04 / DUPĂ-AMIAZĂ LIBERĂ", afternoon: schedule("Nimic pe program", "Citești, tragi un somn, te plimbi, joci cărți, dai o mână de ajutor în grădină sau stai la povești. Să-ți petreci timpul fără program și fără să te repezi la telefon face parte din experiență."),
    dinnerLabel: "05 / CINA", dinner: schedule("Gătim împreună", "Toți punem mâna la cină, la strâns și la treburile taberei."),
    eveningLabel: "06 / SEARA", evening: schedule("Foc de tabără, jocuri, povești", "După cină vin muzica, vorba lungă și stelele."),
    pauseLabel: "TIMP FĂRĂ PROGRAM / 01", pauseTitle: "PLICTISEALA<br>E PERMISĂ",
    imageAlt: "Un copil stă pe o creangă de măr și privește peste o vale verde.", caption: "DUPĂ-AMIAZĂ / NIMIC PE PROGRAM / CAMERA 02"
  },
  workshops: {
    index: "03 / ÎNVĂȚĂM ÎMPREUNĂ", eyebrow: "Atelierul de dimineață", title: "Poate fi<br><em>de mai multe feluri.</em>",
    intro: "<p>În unele dimineți ne ocupăm de <strong>lucruri practice</strong>: învățăm ceva făcând, nu doar ascultând.</p><p>În altele facem <strong>ateliere de discuții și dezbateri</strong>: luăm un subiect la întors pe toate fețele, ascultăm păreri diferite, punem întrebări și ne facem propria părere.</p><p>Cum le amestecăm nu e bătut în cuie. Depinde de participanți, de mentori, de oamenii din sat și de locul în care ajungem.</p>",
    format1: "FORMAT 01", practicalTitle: "Practic", possibleWorkshops: "Ateliere posibile",
    practicalList: list(["Focul de tabără", "Orientare în natură", "Pregătirea unei ture la munte", "Montarea taberei", "Mâncare sănătoasă", "Lucrul cu lemnul", "Meșteșuguri și munci de la țară"]),
    practicalNote: "Duse de mentori, meșteri sau oameni din sat care știu meserie din practică.",
    format2: "FORMAT 02", discussionTitle: "Discuții / dezbateri", possibleTopics: "Subiecte posibile",
    discussionList: list(["Relații", "Gen", "Rețele sociale", "Clima", "Politică", "Consum", "Succes", "Viața de adult"]),
    discussionNote: "Un mentor sau un moderator pune întrebări bune și face loc pentru păreri diferite, nu pentru un singur răspuns „corect”.",
    role: "ROLUL NOSTRU: CREĂM CADRUL / NU DĂM RĂSPUNSURILE"
  },
  mountain: {
    imageAlt: "Un grup mic stă în jurul focului, lângă corturi, sub un cer de munte plin de stele.", index: "04 / NOAPTEA LA MUNTE", eyebrow: "Plecăm pe jos, direct din tabără.",
    title: "Petreci o noapte<br><em>sus, la munte.</em>",
    copy: "<p>Una dintre cele mai tari clipe ale săptămânii e expediția de o noapte la munte, care pornește chiar din tabără.</p><p>Plecăm pe jos, cu rucsacurile în spate: corturi, saci de dormit, mâncare, tot ce ne trebuie. Urcăm la munte, ne punem tabăra, gătim, stăm seara afară, dormim acolo, ne uităm cum răsare soarele, strângem tot și coborâm pe jos la bază a doua zi.</p><p><strong>Fără autocar de excursie. Fără drum cu mașina până la vreo atracție turistică. Plecăm și ne întoarcem pe jos, din tabără.</strong></p><p>E o provocare adevărată, cu puțin disconfort asumat, dar nu e curs de supraviețuire. Oameni cu experiență, un plan bun, echipament potrivit și siguranța rămân pe primul loc.</p>",
    pack: "ÎMPACHETĂM", walk: "PORNIM", camp: "TABĂRĂ", sunrise: "RĂSĂRIT", home: "ACASĂ", kit: "ECHIPAMENT OFERIT", backpacks: "RUCSACURI BUNE", tents: "CORTURI SIGURE", sleepingBags: "SACI DE DORMIT / ~0°C", sharedGear: "ECHIPAMENT COMUN DE TABĂRĂ"
  },
  glance: {
    index: "05 / SĂPTĂMÂNA PE SCURT", title: "Tot ce trebuie să știi<br><em>într-un singur loc.</em>",
    who: fact("PENTRU CINE", "Tineri de 18–25 de ani"), group: fact("GRUP", "10–12 participanți + două gazde"), duration: fact("DURATĂ", "O săptămână"),
    place: fact("LOC", "O comunitate de la țară, în Carpații României"), language: fact("LIMBĂ", "Engleză"), dates: fact("DATE + PREȚ", "Le anunțăm pentru ediția pilot"),
    format: fact("FORMAT", "Viață în aer liber, mese împreună, ateliere dimineața, după-amiezi libere, seri petrecute împreună și o expediție de o noapte la munte"),
    phones: fact("TELEFOANE", "Îți poți lua telefonul dacă chiar ai nevoie, dar îți propunem să-l lași la păstrare și să încerci săptămâna fără el. Dacă te caută cineva de acasă, ne poate suna oricând la tabără."),
    safety: fact("SIGURANȚĂ", "Săptămâna înseamnă drumeții, viață în aer liber și un disconfort pe care îl poți duce. Echipament potrivit, un plan bun și oameni cu experiență: astea sunt de bază.")
  },
  faq: {
    index: "06 / ÎNTREBĂRI", title: "Înainte să-ți faci rucsacul.",
    phoneQ: "Pot să-mi iau telefonul și mă poate găsi cineva de acasă?", phoneA: "Da. Îți poți folosi telefonul dacă chiar ai nevoie, dar îți propunem să-l lași la păstrare și să încerci săptămâna fără el. Dacă te caută cineva de acasă, ne poate suna oricând la tabără.",
    experienceQ: "Trebuie să am experiență la drumeții sau la cort?", experienceA: "Nu-i musai. Nu cerem nicio experiență de drumeții sau de dormit în cort. Săptămâna se învață prin făcut, iar traseul la munte îl alegem și îl adaptăm după grup, ca să-l poată duce toți.",
    survivalQ: "E curs de supraviețuire și ce echipament primesc?", survivalA: "Nu. Noaptea la munte e o provocare pregătită cu cap, nu curs de supraviețuire. Tabăra pune la dispoziție rucsacuri bune, corturi sigure, saci de dormit buni pentru vreo 0°C și echipamentul comun de care e nevoie.",
    costQ: "Când e și cât costă?", costA: "Datele și prețul pentru prima ediție pilot nu sunt încă bătute în cuie. Înscrie-te pe lista pilot și îți scriem de cum se deschid înscrierile.",
    englishQ: "Trebuie să vorbesc engleza ca la carte?", englishA: "Nu-i musai. Engleza e limba comună a taberei, dar nu trebuie să fie limba ta maternă. Ideea e s-o folosești firesc, când gătești, când mergi pe munte, când stai de vorbă, nu s-o vorbești perfect.",
    sleepQ: "Unde dormim?", sleepA: "La tabăra de bază dormim simplu, în aer liber, la țară, în corturi, cu acces la tot ce ne trebuie de bază pe durata săptămânii. O noapte o petrecem la munte, în expediție. Detaliile exacte ți le spunem înainte de rezervare.",
    foodQ: "Ce mâncăm?", foodA: "Mesele fac parte din ce trăim împreună. Prânzul îl gătește proaspăt cineva din sat, mâncare simplă, cu ingrediente de-ale locului. Cina o gătim împreună. Alergiile și ce nu mănânci le notăm la înscriere, ca echipa să-ți poată spune ce putem face."
  },
  reset: { imageAlt: "Două corturi din pânză și un foc de tabără lângă un hambar de lemn, într-o grădină din Maramureș.", title: "Mai puțin digital.<br><em>Mai mult analog.</em>" },
  pilot: { stamp: "PILOT<br>001", eyebrow: "Începem mic", title: "10–12 oameni.<br>7 zile.<br><em>0 algoritmi care hotărăsc ce urmează.</em>" },
  signup: {
    index: "ÎNSCRIERI / PILOT 001", title: "Dă-ne o mână de ajutor să pornim primul pilot.", copy: "<p>Unplug to Reconnect abia începe. Înainte să ne apucăm de toate detaliile, vrem să știm dacă sunt oameni care chiar vor să se întâmple asta.</p><p>Căutăm primii <strong>50 de oameni</strong> interesați de pilot.</p><p>Lasă-ne adresa ta de e-mail, câteva vorbe dacă ai chef, și orice întrebare la care ai vrea să-ți răspundem pe măsură ce pilotul prinde formă.</p>",
    progress: "{count} / {goal} oameni interesați", progressLabel: "Oameni interesați de pilot", goalReached: "Peste 50 de oameni sunt interesați. Am reușit.",
    emailLabel: "Adresa ta de e-mail", emailPlaceholder: "tu@exemplu.ro",
    messageLabel: "Vrei să ne spui ceva?", messageHint: "Câteva vorbe de încurajare, ce-ți place la idee sau orice-ți vine în minte.",
    questionLabel: "Ce ți se pare important să afli?", questionHint: "Întreabă-ne orice ai vrea să știi înainte să te gândești la pilot.",
    consent: "Da, puteți să-mi scrieți despre Unplug to Reconnect și despre primul pilot.", note: "Îți folosim adresa de e-mail ca să te ținem la curent cu proiectul și cu pilotul. Te poți dezabona oricând.", privacyLink: "Informații despre confidențialitate",
    submit: "Mă interesează", sending: "Se trimite…",
    doneTitle: "Ești printre primii.", doneThanks: "Mulțumim că ai ridicat mâna.", doneBody: "Lucrăm mai departe la pilot și îți dăm de veste când avem ceva de spus.", doneQuestion: "Iar dacă ne-ai lăsat o întrebare: o citim.",
    duplicate: "Se pare că ești deja pe listă. Ne bucurăm că ești aici.",
    invalidEmail: "Scrie o adresă de e-mail validă.", consentRequired: "Bifează căsuța ca să-ți putem scrie.", tooLong: "E cam lung. Păstrează fiecare mesaj sub 1.000 de caractere.", error: "Ceva n-a mers de partea noastră. Mai încearcă o dată într-un minut."
  },
  letter: { imageAlt: "Un bărbat în vârstă cu șapcă albă se apleacă deasupra unui cazan mare pe o plită în aer liber și amestecă cu o lingură de lemn, într-o livadă.", caption: "DIN ARHIVĂ", eyebrow: "SCRISOARE DESCHISĂ / DE LA ALEX", title: "O scrisoare deschisă de la Alex despre motivația din spatele Unplug to Reconnect.", copy: "Baschet, software și o săptămână pe dealuri cu bunu meu. Nu-i o respingere a tehnologiei. E o invitație să ieși o vreme din zgomot.", cta: "Citește scrisoarea", close: "Închide" },
  footer: { line: "Hai să ne deconectăm o clipă de lumile noastre digitale și să ne reconectăm cu natura, cu oamenii și cu lucrurile simple.", less: "MAI PUȚIN DIGITAL.", more: "MAI MULT ANALOG.", top: "ÎNAPOI SUS ↑" }
};

const es = {
  meta: {
    title: "Unplug to Reconnect: Menos digital. Más analógico.",
    description: "Una semana sin conexión en los Cárpatos rumanos para que jóvenes adultos encuentren su propia dirección a través de la naturaleza, la experiencia práctica y la conexión humana real."
  },
  access: { skip: "Ir directamente al mundo real", home: "Unplug to Reconnect, inicio", primaryNav: "Navegación principal", keyFacts: "Datos clave", switch: "De digital a analógico", outcomes: "Lo que te llevas", route: "Ruta de la expedición", reset: "Menos digital, más analógico" },
  nav: { menu: "Menú", week: "La semana", activities: "Qué harás", expedition: "La expedición", glance: "De un vistazo", about: "El porqué", join: "Únete a la lista piloto", language: "Idioma" },
  hero: {
    imageAlt: "Un pequeño grupo con mochilas sale de un pueblo de montaña hacia los Cárpatos al amanecer.",
    fieldTest: "PRUEBA DE CAMPO 001", location: "CÁRPATOS / RO", signalLeaving: "...PERDIENDO SEÑAL", signalGone: "...SIN SEÑAL",
    eyebrow: "Unplug to Reconnect presenta", title: "Una semana <em>sin conexión.</em><br><em>Menos digital.</em><br>Más analógico.",
    lede: "Una experiencia de una semana al aire libre para jóvenes adultos, en un rincón rural de los Cárpatos rumanos.", seeWeek: "Ver la semana",
    people: "10–12 PERSONAS", days: "7 DÍAS", ages: "18–25 AÑOS"
  },
  point: {
    index: "01 / LA IDEA", title: "Aléjate del ruido digital durante una semana.",
    copy: "<p>Entre los 18 y los 25 años, muchas personas tomamos algunas de nuestras primeras grandes decisiones sobre estudios, trabajo, relaciones, dónde queremos vivir y qué tipo de vida queremos.</p><p>Al mismo tiempo, gran parte de lo que vemos, escuchamos y usamos para compararnos llega a través de una pantalla.</p><p><strong>No ofrecemos respuestas. Creamos un entorno diferente donde puedes encontrar tu propia dirección, inspiración o perspectiva haciendo cosas reales, pasando tiempo en la naturaleza y hablando cara a cara con otras personas.</strong></p>",
    digital: "DIGITAL", analogue: "ANALÓGICO", phone: "Tu teléfono sobrevivirá una semana sin ti."
  },
  outcomes: {
    resetTitle: "Reinicio digital", resetCopy: "Aleja la tecnología del centro de la vida cotidiana durante una semana y descubre qué cambia cuando el teléfono deja de ser el lugar al que recurres por defecto.",
    confidenceTitle: "Confianza", confidenceCopy: "Camina, cocina, acampa, aprende habilidades prácticas, asume responsabilidades y descubre todo lo que eres capaz de hacer por ti mismo.",
    connectionTitle: "Conexión real", connectionCopy: "Vive, trabaja, come, discrepa, ríe y pasa tiempo con un pequeño grupo de personas, cara a cara."
  },
  day: {
    index: "02 / UN DÍA TÍPICO EN EL CAMPAMENTO", title: "Un ritmo general, no una agenda llena.", intro: "Cada día será un poco diferente, pero la mayoría sigue la misma estructura sencilla. Hay tiempo para aprender, tiempo para ayudar con la vida del campamento y mucho tiempo en el que no hay nada programado.",
    breakfastLabel: "01 / DESAYUNO", breakfast: schedule("Empezar despacio", "Comer juntos, tomar café o té, mirar el tiempo y prepararse para el día."),
    workshopLabel: "02 / TALLER DE LA MAÑANA", workshop: schedule("Aprender o conversar", "Una sesión práctica en la que aprendemos haciendo, o una sesión de conversación y debate en la que exploramos un tema juntos."),
    lunchLabel: "03 / ALMUERZO", lunch: schedule("Comer juntos", "Una persona de la zona cocina platos regionales frescos y tradicionales, esa comida generosa que una abuela rumana pondría sobre la mesa."),
    afternoonLabel: "04 / TARDE LIBRE", afternoon: schedule("Nada programado", "Lee, duerme, pasea, juega a las cartas, ayuda en el huerto o conversa. Aprender a pasar tiempo sin estructura y sin recurrir automáticamente al teléfono forma parte de la experiencia."),
    dinnerLabel: "05 / CENA", dinner: schedule("Cocinar juntos", "Todo el mundo ayuda a preparar la cena, limpiar y cuidar el campamento."),
    eveningLabel: "06 / NOCHE", evening: schedule("Hoguera, juegos, conversación", "Después de cenar llegan la música, las conversaciones y las estrellas."),
    pauseLabel: "TIEMPO SIN ESTRUCTURA / 01", pauseTitle: "ABURRIRSE<br>ESTÁ PERMITIDO",
    imageAlt: "Un niño está sentado en una rama de un manzano y mira un valle verde.", caption: "TARDE / NADA PROGRAMADO / CÁMARA 02"
  },
  workshops: {
    index: "03 / APRENDER JUNTOS", eyebrow: "El taller de la mañana", title: "Puede adoptar<br><em>formas diferentes.</em>",
    intro: "<p>Algunas mañanas se centran en <strong>habilidades prácticas</strong>, aprender algo haciéndolo de verdad.</p><p>Otras mañanas hay <strong>talleres de conversación y debate</strong>, una oportunidad para explorar un tema, escuchar perspectivas diferentes, hacer preguntas y formar tu propia opinión.</p><p>La combinación exacta no es fija. Depende de los participantes, los mentores, la gente del lugar y el entorno.</p>",
    format1: "FORMATO 01", practicalTitle: "Práctico", possibleWorkshops: "Posibles talleres",
    practicalList: list(["Hoguera", "Orientación", "Preparación de rutas", "Montaje del campamento", "Alimentación y nutrición", "Carpintería", "Habilidades rurales tradicionales"]),
    practicalNote: "Dirigidos por mentores, artesanos o personas de la zona con experiencia práctica.",
    format2: "FORMATO 02", discussionTitle: "Conversación / debate", possibleTopics: "Posibles temas",
    discussionList: list(["Relaciones", "Género", "Redes sociales", "Clima", "Política", "Consumo", "Éxito", "Vida adulta"]),
    discussionNote: "Una persona mentora o moderadora hace preguntas útiles y crea espacio para distintas perspectivas, no para una respuesta ‘correcta’.",
    role: "NUESTRO PAPEL: CREAR EL ENTORNO / NO DICTAR LA RESPUESTA"
  },
  mountain: {
    imageAlt: "Un pequeño grupo se sienta alrededor de una hoguera junto a unas tiendas bajo un cielo estrellado de montaña.", index: "04 / LA NOCHE EN LA MONTAÑA", eyebrow: "Salimos a pie desde el campamento.",
    title: "Pasa una noche<br><em>en las montañas.</em>",
    copy: "<p>Una de las experiencias que definen la semana es una expedición de una noche a la montaña que comienza directamente en el campamento.</p><p>Salimos a pie con las mochilas, tiendas, sacos de dormir, comida y equipo. Caminamos hacia las montañas, montamos el campamento, cocinamos, pasamos la noche fuera, dormimos allí, vemos el amanecer, recogemos todo y regresamos a pie a la base al día siguiente.</p><p><strong>Sin autobús de excursión. Sin conducir hasta una atracción turística. Empezamos y terminamos a pie desde el campamento.</strong></p><p>Es un reto real con cierta incomodidad intencionada, pero no es un entrenamiento de supervivencia. El liderazgo con experiencia, una buena planificación, el equipo adecuado y la seguridad siguen siendo fundamentales.</p>",
    pack: "PREPARAR", walk: "CAMINAR", camp: "ACAMPAR", sunrise: "AMANECER", home: "VOLVER", kit: "EQUIPO INCLUIDO", backpacks: "MOCHILAS ADECUADAS", tents: "TIENDAS FIABLES", sleepingBags: "SACOS DE DORMIR / ~0°C", sharedGear: "EQUIPO COMÚN DE CAMPING"
  },
  glance: {
    index: "05 / LA SEMANA DE UN VISTAZO", title: "Todo lo importante<br><em>en un solo lugar.</em>",
    who: fact("PARA QUIÉN", "18–25 años"), group: fact("GRUPO", "10–12 participantes + dos anfitriones"), duration: fact("DURACIÓN", "Una semana"),
    place: fact("LUGAR", "Una comunidad rural de los Cárpatos rumanos"), language: fact("IDIOMA", "Inglés"), dates: fact("FECHAS + PRECIO", "Se anunciarán para el programa piloto"),
    format: fact("FORMATO", "Vida al aire libre, comidas compartidas, talleres por la mañana, tardes libres, noches juntos y una expedición de una noche a la montaña"),
    phones: fact("TELÉFONOS", "Puedes usar el teléfono si realmente lo necesitas, pero te proponemos guardarlo y probar la semana sin él. El campamento seguirá localizable si alguien de casa necesita ponerse en contacto contigo."),
    safety: fact("SEGURIDAD", "La semana incluye senderismo, vida al aire libre y una incomodidad manejable. El equipo adecuado, la planificación y el liderazgo con experiencia son fundamentales.")
  },
  faq: {
    index: "06 / PREGUNTAS", title: "Antes de hacer la mochila.",
    phoneQ: "¿Puedo usar el teléfono y pueden localizarme desde casa?", phoneA: "Sí. Puedes usar el teléfono si realmente lo necesitas, pero te proponemos guardarlo y probar la semana sin él. El campamento seguirá localizable si alguien de casa necesita ponerse en contacto contigo.",
    experienceQ: "¿Necesito experiencia en senderismo o camping?", experienceA: "No se espera experiencia previa en senderismo o camping. La semana se basa en aprender haciendo, y la ruta de montaña se planificará y adaptará al grupo para que todo el mundo pueda completarla.",
    survivalQ: "¿Es un entrenamiento de supervivencia y qué equipo se proporciona?", survivalA: "No. La noche en la montaña es un reto planificado al aire libre, no un entrenamiento de supervivencia. El campamento proporciona mochilas adecuadas, tiendas fiables, sacos de dormir para temperaturas cercanas a 0°C y el equipo común necesario.",
    costQ: "¿Cuándo será y cuánto costará?", costA: "Las fechas y el precio del primer programa piloto todavía no son definitivos. Únete a la lista piloto y compartiremos los detalles cuando se abran las solicitudes.",
    englishQ: "¿Necesito hablar inglés con fluidez?", englishA: "No. El inglés es el idioma común del campamento, pero no tiene que ser tu lengua materna. La idea es usar el inglés con naturalidad mientras cocinas, caminas, hablas y pasas tiempo con los demás, no hablarlo perfectamente.",
    sleepQ: "¿Dónde dormimos?", sleepA: "El campamento base utiliza un alojamiento sencillo al aire libre en un entorno rural, con tiendas y acceso a las instalaciones básicas necesarias para la semana. Una noche se pasa acampando en las montañas como parte de la expedición. Los detalles exactos se compartirán antes de reservar.",
    foodQ: "¿Qué comeremos?", foodA: "Las comidas forman parte de la experiencia compartida. Una persona de la zona prepara el almuerzo al momento, con comida sencilla e ingredientes locales. La cena la preparamos juntos. Las necesidades alimentarias y las alergias se recogerán durante la inscripción para que el equipo pueda confirmar qué adaptaciones son posibles."
  },
  reset: { imageAlt: "Dos tiendas de lona y una hoguera iluminan el jardín junto a un granero de madera en Maramureș.", title: "Menos digital.<br><em>Más analógico.</em>" },
  pilot: { stamp: "PILOTO<br>001", eyebrow: "Esto empieza en pequeño", title: "10–12 personas.<br>7 días.<br><em>0 algoritmos decidiendo qué viene después.</em>" },
  signup: {
    index: "ÚNETE / PILOTO 001", title: "Ayúdanos a poner en marcha el primer piloto.", copy: "<p>Unplug to Reconnect está todavía en sus comienzos. Antes de ponernos con todos los detalles, queremos saber si hay gente ahí fuera que de verdad quiere que esto ocurra.</p><p>Buscamos a las primeras <strong>50 personas</strong> interesadas en el piloto.</p><p>Déjanos tu correo, unas palabras si quieres, y cualquier pregunta que te gustaría que respondiéramos a medida que el piloto va tomando forma.</p>",
    progress: "{count} / {goal} personas interesadas", progressLabel: "Personas interesadas en el piloto", goalReached: "Más de 50 personas están interesadas. Lo hemos conseguido.",
    emailLabel: "Tu correo electrónico", emailPlaceholder: "tu@ejemplo.es",
    messageLabel: "¿Quieres contarnos algo?", messageHint: "Unas palabras de ánimo, lo que te gusta de la idea o lo que se te ocurra.",
    questionLabel: "¿Qué te importa saber?", questionHint: "Pregúntanos lo que te gustaría tener respondido antes de plantearte el piloto.",
    consent: "Sí, podéis escribirme sobre Unplug to Reconnect y el primer piloto.", note: "Usaremos tu correo para mantenerte al día sobre el proyecto y el piloto. Puedes darte de baja cuando quieras.", privacyLink: "Información de privacidad",
    submit: "Me interesa", sending: "Enviando…",
    doneTitle: "Eres de los primeros.", doneThanks: "Gracias por levantar la mano.", doneBody: "Seguiremos trabajando en el piloto y te avisaremos cuando haya algo que merezca la pena compartir.", doneQuestion: "Y si nos has dejado una pregunta: la leeremos.",
    duplicate: "Parece que ya estás dentro. Nos alegra tenerte aquí.",
    invalidEmail: "Introduce una dirección de correo válida.", consentRequired: "Marca la casilla para que podamos escribirte.", tooLong: "Es un poco largo. Mantén cada texto por debajo de 1.000 caracteres.", error: "Algo ha fallado por nuestra parte. Inténtalo de nuevo en un momento."
  },
  letter: { imageAlt: "Un hombre mayor con gorra blanca se inclina sobre una olla grande en una cocina al aire libre y la remueve con una cuchara de madera, en un huerto.", caption: "DEL ARCHIVO", eyebrow: "CARTA ABIERTA / DE ALEX", title: "Una carta abierta de Alex sobre el porqué de Unplug to Reconnect.", copy: "Baloncesto, software y una semana en las colinas con mi abuelo. No es un rechazo de la tecnología. Es una invitación a salir del ruido durante un tiempo.", cta: "Leer la carta", close: "Cerrar" },
  footer: { line: "Desconectemos un momento de nuestros mundos digitales y volvamos a conectar con la naturaleza, las personas y las cosas sencillas.", less: "MENOS DIGITAL.", more: "MÁS ANALÓGICO.", top: "VOLVER ARRIBA ↑" }
};

const it = {
  meta: {
    title: "Unplug to Reconnect: Meno digitale. Più analogico.",
    description: "Una settimana offline nei Carpazi rumeni, per dare ai giovani adulti lo spazio di trovare la propria direzione attraverso la natura, le esperienze pratiche e le relazioni umane."
  },
  access: { skip: "Vai direttamente al mondo reale", home: "Unplug to Reconnect, home", primaryNav: "Navigazione principale", keyFacts: "Informazioni chiave", switch: "Da digitale ad analogico", outcomes: "Cosa porti con te", route: "Percorso della spedizione", reset: "Meno digitale, più analogico" },
  nav: { menu: "Menu", week: "La settimana", activities: "Cosa farai", expedition: "La spedizione", glance: "In breve", about: "Il perché", join: "Unisciti alla lista pilota", language: "Lingua" },
  hero: {
    imageAlt: "Un piccolo gruppo con gli zaini lascia un villaggio di montagna e cammina nei Carpazi all’alba.",
    fieldTest: "TEST SUL CAMPO 001", location: "CARPAZI / RO", signalLeaving: "...IL SEGNALE SVANISCE", signalGone: "...NESSUN SEGNALE",
    eyebrow: "Unplug to Reconnect presenta", title: "Una settimana <em>offline.</em><br><em>Meno digitale.</em><br>Più analogico.",
    lede: "Un’esperienza di una settimana all’aperto per giovani adulti, in un angolo rurale dei Carpazi rumeni.", seeWeek: "Scopri la settimana",
    people: "10–12 PERSONE", days: "7 GIORNI", ages: "18–25 ANNI"
  },
  point: {
    index: "01 / IL SENSO", title: "Allontanati dal rumore digitale per una settimana.",
    copy: "<p>Tra i 18 e i 25 anni, molti di noi prendono alcune delle prime grandi decisioni su studio, lavoro, relazioni, dove vivere e che tipo di vita desiderare.</p><p>Allo stesso tempo, gran parte di ciò che vediamo, ascoltiamo e usiamo per confrontarci con gli altri arriva attraverso uno schermo.</p><p><strong>Non offriamo risposte. Creiamo un ambiente diverso in cui puoi trovare la tua direzione, ispirazione o una nuova prospettiva facendo cose concrete, passando tempo nella natura e parlando faccia a faccia con altre persone.</strong></p>",
    digital: "DIGITALE", analogue: "ANALOGICO", phone: "Il tuo telefono sopravviverà una settimana senza di te."
  },
  outcomes: {
    resetTitle: "Pausa digitale", resetCopy: "Sposta la tecnologia dal centro della vita quotidiana per una settimana e scopri cosa cambia quando il telefono non è più il posto verso cui ti rivolgi automaticamente.",
    confidenceTitle: "Fiducia", confidenceCopy: "Cammina, cucina, campeggia, impara abilità pratiche, assumiti responsabilità e scopri quanto sai fare da solo.",
    connectionTitle: "Connessione reale", connectionCopy: "Vivi, lavora, mangia, non essere d’accordo, ridi e passa il tempo con un piccolo gruppo di persone, faccia a faccia."
  },
  day: {
    index: "02 / UNA GIORNATA TIPO AL CAMPO", title: "Un ritmo generale, non un programma pieno.", intro: "Ogni giorno sarà un po’ diverso, ma la maggior parte segue la stessa struttura semplice. C’è tempo per imparare, tempo per contribuire alla vita del campo e molto tempo in cui non è previsto nulla.",
    breakfastLabel: "01 / COLAZIONE", breakfast: schedule("Iniziare con calma", "Mangiare insieme, bere caffè o tè, controllare il meteo e prepararsi per la giornata."),
    workshopLabel: "02 / LABORATORIO DEL MATTINO", workshop: schedule("Imparare o discutere", "Una sessione pratica in cui impariamo facendo, oppure un incontro di discussione e confronto in cui esploriamo insieme un tema."),
    lunchLabel: "03 / PRANZO", lunch: schedule("Mangiare insieme", "Una persona del posto prepara piatti regionali freschi e tradizionali, quel cibo semplice e generoso che una nonna rumena porterebbe in tavola."),
    afternoonLabel: "04 / POMERIGGIO LIBERO", afternoon: schedule("Nulla in programma", "Leggi, dormi, cammina, gioca a carte, aiuta nell’orto o parla. Imparare a vivere un tempo non strutturato senza prendere automaticamente il telefono fa parte dell’esperienza."),
    dinnerLabel: "05 / CENA", dinner: schedule("Cucinare insieme", "Tutti aiutano a preparare la cena, riordinare e prendersi cura del campo."),
    eveningLabel: "06 / SERA", evening: schedule("Falò, giochi, conversazioni", "Dopo cena arrivano la musica, le conversazioni e le stelle."),
    pauseLabel: "TEMPO NON STRUTTURATO / 01", pauseTitle: "NOIA<br>CONSENTITA",
    imageAlt: "Un bambino è seduto su un ramo di un melo e guarda una valle verde.", caption: "POMERIGGIO / NULLA IN PROGRAMMA / FOTOCAMERA 02"
  },
  workshops: {
    index: "03 / IMPARARE INSIEME", eyebrow: "Il laboratorio del mattino", title: "Può avere<br><em>forme diverse.</em>",
    intro: "<p>Alcune mattine sono dedicate alle <strong>abilità pratiche</strong>, imparare qualcosa facendola davvero.</p><p>Altre mattine ospitano <strong>laboratori di discussione e confronto</strong>, per esplorare un tema, ascoltare prospettive diverse, fare domande e formarsi un’opinione personale.</p><p>La combinazione esatta non è fissa. Dipende dai partecipanti, dai mentor, dalle persone del luogo e dal contesto.</p>",
    format1: "FORMATO 01", practicalTitle: "Pratico", possibleWorkshops: "Laboratori possibili",
    practicalList: list(["Falò", "Orientamento", "Preparazione di un’escursione", "Allestimento del campo", "Alimentazione e nutrizione", "Lavorazione del legno", "Abilità rurali tradizionali"]),
    practicalNote: "Guidati da mentor, artigiani o persone del luogo con esperienza pratica.",
    format2: "FORMATO 02", discussionTitle: "Discussione / confronto", possibleTopics: "Temi possibili",
    discussionList: list(["Relazioni", "Genere", "Social media", "Clima", "Politica", "Consumo", "Successo", "Età adulta"]),
    discussionNote: "Un mentor o una persona che modera pone domande utili e crea spazio per prospettive diverse, non per una risposta ‘giusta’.",
    role: "IL NOSTRO RUOLO: CREARE L’AMBIENTE / NON IMPORRE LA RISPOSTA"
  },
  mountain: {
    imageAlt: "Un piccolo gruppo siede intorno a un falò accanto alle tende, sotto un cielo stellato di montagna.", index: "04 / LA NOTTE IN MONTAGNA", eyebrow: "Partenza a piedi dal campo.",
    title: "Passa una notte<br><em>in montagna.</em>",
    copy: "<p>Una delle esperienze centrali della settimana è una spedizione di una notte in montagna che parte direttamente dal campo.</p><p>Partiamo a piedi portando zaini, tende, sacchi a pelo, cibo e attrezzatura. Camminiamo verso le montagne, montiamo il campo, cuciniamo, passiamo la serata all’aperto, dormiamo lì, guardiamo l’alba, rimettiamo tutto negli zaini e torniamo a piedi alla base il giorno successivo.</p><p><strong>Nessun autobus turistico. Nessun viaggio verso un’attrazione. Partiamo e torniamo a piedi direttamente dal campo.</strong></p><p>È una vera sfida, con un po’ di disagio intenzionale, ma non è un corso di sopravvivenza. Una guida esperta, una pianificazione attenta, l’attrezzatura adatta e la sicurezza restano fondamentali.</p>",
    pack: "PREPARARE", walk: "CAMMINARE", camp: "CAMPEGGIARE", sunrise: "ALBA", home: "RITORNO", kit: "ATTREZZATURA FORNITA", backpacks: "ZAINI ADATTI", tents: "TENDE AFFIDABILI", sleepingBags: "SACCHI A PELO / ~0°C", sharedGear: "ATTREZZATURA COMUNE DA CAMPEGGIO"
  },
  glance: {
    index: "05 / LA SETTIMANA IN BREVE", title: "Tutto ciò che conta<br><em>in un solo posto.</em>",
    who: fact("PER CHI", "18–25 anni"), group: fact("GRUPPO", "10–12 partecipanti + due host"), duration: fact("DURATA", "Una settimana"),
    place: fact("LUOGO", "Una comunità rurale nei Carpazi rumeni"), language: fact("LINGUA", "Inglese"), dates: fact("DATE + PREZZO", "Da annunciare per il progetto pilota"),
    format: fact("FORMATO", "Vita all’aperto, pasti condivisi, laboratori al mattino, pomeriggi liberi, serate insieme e una spedizione di una notte in montagna"),
    phones: fact("TELEFONI", "Puoi usare il telefono se ne hai davvero bisogno, ma ti proponiamo di lasciarlo al sicuro e provare a vivere la settimana senza. Il campo resta raggiungibile se qualcuno da casa deve contattarti."),
    safety: fact("SICUREZZA", "La settimana comprende escursioni, vita all’aperto e un disagio gestibile. Attrezzatura adatta, pianificazione e guida esperta sono fondamentali.")
  },
  faq: {
    index: "06 / DOMANDE", title: "Prima di fare lo zaino.",
    phoneQ: "Posso usare il telefono e possono contattarmi da casa?", phoneA: "Sì. Puoi usare il telefono se ne hai davvero bisogno, ma ti proponiamo di lasciarlo al sicuro e provare a vivere la settimana senza. Il campo resta raggiungibile se qualcuno da casa deve contattarti.",
    experienceQ: "Serve esperienza di escursionismo o campeggio?", experienceA: "Non è richiesta alcuna esperienza precedente di escursionismo o campeggio. La settimana si basa sull’imparare facendo, e il percorso in montagna sarà pianificato e adattato al gruppo affinché tutti possano completarlo.",
    survivalQ: "È un corso di sopravvivenza e quale attrezzatura viene fornita?", survivalA: "No. La notte in montagna è una sfida all’aperto pianificata, non un corso di sopravvivenza. Il campo fornisce zaini adatti, tende affidabili, sacchi a pelo per temperature intorno a 0°C e l’attrezzatura comune necessaria.",
    costQ: "Quando si svolgerà e quanto costerà?", costA: "Le date e il prezzo del primo progetto pilota non sono ancora definitivi. Unisciti alla lista pilota e condivideremo i dettagli all’apertura delle candidature.",
    englishQ: "Devo parlare inglese fluentemente?", englishA: "No. L’inglese è la lingua comune del campo, ma non deve essere la tua prima lingua. L’obiettivo è usare l’inglese in modo naturale mentre cucini, cammini, parli e trascorri tempo con gli altri, non parlarlo perfettamente.",
    sleepQ: "Dove dormiamo?", sleepA: "Il campo base offre una sistemazione semplice all’aperto in un contesto rurale, con tende e accesso ai servizi di base necessari per la settimana. Una notte viene trascorsa in campeggio sulle montagne durante la spedizione. I dettagli esatti saranno condivisi prima della prenotazione.",
    foodQ: "Cosa mangeremo?", foodA: "I pasti fanno parte dell’esperienza condivisa. Il pranzo viene preparato fresco da una persona del posto, con cibo semplice e ingredienti locali. Prepariamo la cena insieme. Le esigenze alimentari e le allergie saranno raccolte durante l’iscrizione, così il team potrà confermare quali adattamenti sono possibili."
  },
  reset: { imageAlt: "Due tende in tela e un falò illuminano il giardino accanto a un fienile in legno nel Maramureș.", title: "Meno digitale.<br><em>Più analogico.</em>" },
  pilot: { stamp: "PILOTA<br>001", eyebrow: "Iniziamo in piccolo", title: "10–12 persone.<br>7 giorni.<br><em>0 algoritmi a decidere cosa viene dopo.</em>" },
  signup: {
    index: "PARTECIPA / PILOTA 001", title: "Aiutaci a far partire il primo pilota.", copy: "<p>Unplug to Reconnect è ancora agli inizi. Prima di mettere a punto tutti i dettagli, vogliamo sapere se là fuori c’è davvero qualcuno che vuole che questo succeda.</p><p>Cerchiamo le prime <strong>50 persone</strong> interessate al pilota.</p><p>Lasciaci la tua e-mail, due parole se ti va, e qualsiasi domanda a cui vorresti che rispondessimo man mano che il pilota prende forma.</p>",
    progress: "{count} / {goal} persone interessate", progressLabel: "Persone interessate al pilota", goalReached: "Più di 50 persone sono interessate. Ce l’abbiamo fatta.",
    emailLabel: "La tua e-mail", emailPlaceholder: "tu@esempio.it",
    messageLabel: "Vuoi dirci qualcosa?", messageHint: "Due parole di incoraggiamento, cosa ti piace dell’idea o qualsiasi cosa ti venga in mente.",
    questionLabel: "Cosa ti interessa sapere?", questionHint: "Chiedici quello a cui vorresti una risposta prima di considerare il pilota.",
    consent: "Sì, potete scrivermi di Unplug to Reconnect e del primo pilota.", note: "Useremo la tua e-mail per tenerti aggiornato sul progetto e sul pilota. Puoi annullare l’iscrizione in qualsiasi momento.", privacyLink: "Informativa sulla privacy",
    submit: "Mi interessa", sending: "Invio in corso…",
    doneTitle: "Sei tra i primi.", doneThanks: "Grazie per aver alzato la mano.", doneBody: "Continueremo a lavorare al pilota e ti faremo sapere quando ci sarà qualcosa da raccontare.", doneQuestion: "E se ci hai lasciato una domanda: la leggeremo.",
    duplicate: "Sembra che tu sia già dentro. Bello averti qui.",
    invalidEmail: "Inserisci un indirizzo e-mail valido.", consentRequired: "Spunta la casella così possiamo scriverti.", tooLong: "È un po’ lungo. Tieni ogni testo sotto i 1.000 caratteri.", error: "Qualcosa è andato storto da parte nostra. Riprova tra un attimo."
  },
  letter: { imageAlt: "Un uomo anziano con il berretto bianco si china su una grande pentola su un fornello all’aperto e la mescola con un mestolo di legno, in un frutteto.", caption: "DALL’ARCHIVIO", eyebrow: "LETTERA APERTA / DA ALEX", title: "Una lettera aperta di Alex sul perché di Unplug to Reconnect.", copy: "Basket, software e una settimana sulle colline con mio nonno. Non è un rifiuto della tecnologia. È un invito a uscire dal rumore per un po’.", cta: "Leggi la lettera", close: "Chiudi" },
  footer: { line: "Disconnettiamoci per un momento dai nostri mondi digitali e riconnettiamoci con la natura, le persone e le cose semplici.", less: "MENO DIGITALE.", more: "PIÙ ANALOGICO.", top: "TORNA SU ↑" }
};

window.U2R_TRANSLATIONS = { en, de, fr, ro, es, it };
