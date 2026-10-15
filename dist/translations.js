const list = (items) => items.map((item) => `<li>${item}</li>`).join("");
const fact = (label, value) => `<dt class="mono">${label}</dt><dd>${value}</dd>`;
const schedule = (title, copy) => `<h3>${title}</h3><p>${copy}</p>`;

const en = {
  meta: {
    title: "Unplug to Reconnect: Less digital. More analogue.",
    description: "One week offline in the Romanian Carpathians, giving young adults room to find their own direction through nature, practical experience, and real human connection."
  },
  access: { skip: "Skip to the real world", home: "Unplug to Reconnect, home", primaryNav: "Primary navigation", keyFacts: "Key facts", switch: "Digital to analogue", outcomes: "What you take home", route: "Expedition route", reset: "Less digital, more analogue" },
  nav: { menu: "Menu", week: "The week", activities: "What you do", expedition: "The expedition", glance: "At a glance", join: "Join the pilot list", language: "Language" },
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
    imageAlt: "Young adults prepare dinner together at a wooden table outside a rural house.", caption: "EVENING / DINNER CREW / CAMERA 02"
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
    index: "JOIN / PILOT 001", title: "Come with us.", copy: "The first camp will be small on purpose. Join the pilot list to hear when applications open and help shape what Unplug to Reconnect becomes.",
    emailLabel: "Your email", emailPlaceholder: "you@example.com", submit: "Keep me posted", consent: "I’m happy to receive occasional pilot updates. No feed-filling nonsense.",
    note: "Prototype form: submissions are not sent until a mailing-list service is connected.", invalidEmail: "Enter a valid email address to join the list.", consentRequired: "Please confirm that occasional pilot updates are okay.", success: "Looks good. Connect the mailing-list service to start collecting sign-ups."
  },
  footer: { line: "Let’s unplug for a moment from our digital worlds and reconnect with nature, people, and simple things.", less: "LESS DIGITAL.", more: "MORE ANALOGUE.", top: "BACK TO TOP ↑" }
};

const de = {
  meta: {
    title: "Unplug to Reconnect: Weniger digital. Mehr analog.",
    description: "Eine Woche offline in den rumänischen Karpaten, in der junge Erwachsene durch Natur, praktische Erfahrungen und echte menschliche Begegnungen Raum für ihren eigenen Weg finden."
  },
  access: { skip: "Direkt zur echten Welt", home: "Unplug to Reconnect, Startseite", primaryNav: "Hauptnavigation", keyFacts: "Wichtige Fakten", switch: "Von digital zu analog", outcomes: "Was du mitnimmst", route: "Route der Expedition", reset: "Weniger digital, mehr analog" },
  nav: { menu: "Menü", week: "Die Woche", activities: "Was du machst", expedition: "Die Expedition", glance: "Auf einen Blick", join: "Zur Pilotliste", language: "Sprache" },
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
    imageAlt: "Junge Erwachsene bereiten gemeinsam an einem Holztisch vor einem ländlichen Haus das Abendessen zu.", caption: "ABEND / KÜCHENTEAM / KAMERA 02"
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
    who: fact("WER", "18–25 Jahre"), group: fact("GRUPPE", "10–12 Teilnehmende + zwei Hosts"), duration: fact("DAUER", "Eine Woche"),
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
    index: "MITMACHEN / PILOT 001", title: "Komm mit.", copy: "Das erste Camp bleibt bewusst klein. Trag dich in die Pilotliste ein, erfahre, wann die Bewerbungen starten, und gestalte mit, was Unplug to Reconnect wird.",
    emailLabel: "Deine E-Mail", emailPlaceholder: "du@beispiel.de", submit: "Informiert mich", consent: "Ich möchte gelegentliche Updates zum Pilotprojekt erhalten. Kein Feed-Füllmaterial.",
    note: "Prototyp-Formular: Eingaben werden erst gesendet, wenn ein Mailinglisten-Dienst verbunden ist.", invalidEmail: "Gib eine gültige E-Mail-Adresse ein.", consentRequired: "Bitte bestätige, dass gelegentliche Updates in Ordnung sind.", success: "Sieht gut aus. Verbinde den Mailinglisten-Dienst, um Anmeldungen zu sammeln."
  },
  footer: { line: "Lass uns für einen Moment von unseren digitalen Welten abschalten und uns wieder mit Natur, Menschen und einfachen Dingen verbinden.", less: "WENIGER DIGITAL.", more: "MEHR ANALOG.", top: "NACH OBEN ↑" }
};

const fr = {
  meta: {
    title: "Unplug to Reconnect : Moins numérique. Plus analogique.",
    description: "Une semaine hors ligne dans les Carpates roumaines, pour permettre aux jeunes adultes de trouver leur propre direction grâce à la nature, à l’expérience pratique et aux liens humains."
  },
  access: { skip: "Aller directement au monde réel", home: "Unplug to Reconnect, accueil", primaryNav: "Navigation principale", keyFacts: "Informations clés", switch: "Du numérique à l’analogique", outcomes: "Ce que vous emportez", route: "Itinéraire de l’expédition", reset: "Moins numérique, plus analogique" },
  nav: { menu: "Menu", week: "La semaine", activities: "Ce que vous ferez", expedition: "L’expédition", glance: "En bref", join: "Rejoindre la liste pilote", language: "Langue" },
  hero: {
    imageAlt: "Un petit groupe avec des sacs à dos quitte un village de montagne pour marcher dans les Carpates au lever du soleil.",
    fieldTest: "TEST TERRAIN 001", location: "CARPATES / RO", signalLeaving: "...PERTE DU SIGNAL", signalGone: "...AUCUN SIGNAL",
    eyebrow: "Unplug to Reconnect présente", title: "Une semaine <em>hors ligne.</em><br><em>Moins numérique.</em><br>Plus analogique.",
    lede: "Une expérience d’une semaine en plein air pour les jeunes adultes, dans un coin rural des Carpates roumaines.", seeWeek: "Voir la semaine",
    people: "10–12 PERSONNES", days: "7 JOURS", ages: "18–25 ANS"
  },
  point: {
    index: "01 / L’IDÉE", title: "Éloignez-vous du bruit numérique pendant une semaine.",
    copy: "<p>Entre 18 et 25 ans, beaucoup d’entre nous prennent leurs premières grandes décisions concernant les études, le travail, les relations, l’endroit où vivre et la vie que nous voulons mener.</p><p>En même temps, une grande partie de ce que nous voyons, entendons et utilisons pour nous comparer passe par un écran.</p><p><strong>Nous ne proposons pas de réponses. Nous créons un autre environnement où vous pouvez trouver votre propre direction, de l’inspiration ou une nouvelle perspective en faisant des choses concrètes, en passant du temps dans la nature et en parlant avec d’autres personnes face à face.</strong></p>",
    digital: "NUMÉRIQUE", analogue: "ANALOGIQUE", phone: "Votre téléphone survivra une semaine sans vous."
  },
  outcomes: {
    resetTitle: "Pause numérique", resetCopy: "Éloignez la technologie du centre de votre quotidien pendant une semaine et observez ce qui change lorsque votre téléphone n’est plus votre réflexe par défaut.",
    confidenceTitle: "Confiance", confidenceCopy: "Marcher, cuisiner, camper, apprendre des compétences pratiques, prendre des responsabilités et découvrir tout ce que vous pouvez faire par vous-même.",
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
    imageAlt: "De jeunes adultes préparent le dîner ensemble sur une table en bois devant une maison rurale.", caption: "SOIRÉE / ÉQUIPE DÎNER / APPAREIL 02"
  },
  workshops: {
    index: "03 / APPRENDRE ENSEMBLE", eyebrow: "L’atelier du matin", title: "Il peut prendre<br><em>différentes formes.</em>",
    intro: "<p>Certains matins sont consacrés aux <strong>compétences pratiques</strong>, apprendre quelque chose en le faisant réellement.</p><p>D’autres matins proposent des <strong>ateliers de discussion et de débat</strong>, pour explorer un sujet, entendre différents points de vue, poser des questions et construire sa propre opinion.</p><p>Le mélange exact n’est pas fixé. Il dépend des participants, des mentors, des habitants et du lieu.</p>",
    format1: "FORMAT 01", practicalTitle: "Pratique", possibleWorkshops: "Ateliers possibles",
    practicalList: list(["Feu de camp", "Orientation", "Préparation d’une randonnée", "Installation du camp", "Alimentation et nutrition", "Travail du bois", "Savoir-faire ruraux traditionnels"]),
    practicalNote: "Animés par des mentors, des artisans ou des habitants ayant une expérience pratique.",
    format2: "FORMAT 02", discussionTitle: "Discussion / débat", possibleTopics: "Sujets possibles",
    discussionList: list(["Relations", "Genre", "Réseaux sociaux", "Climat", "Politique", "Consommation", "Réussite", "Entrée dans l’âge adulte"]),
    discussionNote: "Un mentor ou une personne chargée de la modération pose des questions utiles et crée un espace pour différents points de vue, sans imposer une réponse ‘juste’.",
    role: "NOTRE RÔLE : CRÉER L’ENVIRONNEMENT / PAS DICTER LA RÉPONSE"
  },
  mountain: {
    imageAlt: "Un petit groupe est assis autour d’un feu de camp, près de tentes, sous un ciel de montagne étoilé.", index: "04 / LA NUIT EN MONTAGNE", eyebrow: "Départ du camp. À pied.",
    title: "Passez une nuit<br><em>dans les montagnes.</em>",
    copy: "<p>L’une des expériences marquantes de la semaine est une expédition d’une nuit en montagne, au départ direct du camp.</p><p>Nous partons à pied avec nos sacs à dos, tentes, sacs de couchage, nourriture et matériel. Nous marchons dans les montagnes, installons le camp, cuisinons, passons la soirée dehors, dormons sur place, regardons le lever du soleil, rangeons tout et revenons à pied à la base le lendemain.</p><p><strong>Pas de bus touristique. Pas de trajet vers une attraction. Nous partons du camp et y revenons à pied.</strong></p><p>C’est un vrai défi qui comprend un inconfort volontaire, mais ce n’est pas un entraînement de survie. Un encadrement expérimenté, une bonne préparation, un équipement adapté et la sécurité restent essentiels.</p>",
    pack: "PRÉPARER", walk: "MARCHER", camp: "CAMPER", sunrise: "LEVER DU SOLEIL", home: "RETOUR", kit: "MATÉRIEL FOURNI", backpacks: "SACS À DOS ADAPTÉS", tents: "TENTES FIABLES", sleepingBags: "SACS DE COUCHAGE / ~0°C", sharedGear: "MATÉRIEL DE CAMPING COLLECTIF"
  },
  glance: {
    index: "05 / LA SEMAINE EN BREF", title: "Tout ce qui compte<br><em>au même endroit.</em>",
    who: fact("POUR QUI", "18–25 ans"), group: fact("GROUPE", "10–12 participants + deux hôtes"), duration: fact("DURÉE", "Une semaine"),
    place: fact("LIEU", "Une communauté rurale des Carpates roumaines"), language: fact("LANGUE", "Anglais"), dates: fact("DATES + PRIX", "À annoncer pour le projet pilote"),
    format: fact("FORMAT", "Vie en plein air, repas partagés, ateliers le matin, après-midis libres, soirées ensemble et expédition d’une nuit en montagne"),
    phones: fact("TÉLÉPHONES", "Vous pouvez utiliser votre téléphone si vous en avez vraiment besoin, mais nous vous proposons de le laisser en sécurité et d’essayer de vivre la semaine sans lui. Le camp reste joignable si un proche doit vous contacter."),
    safety: fact("SÉCURITÉ", "La semaine comprend de la randonnée, de la vie en plein air et un inconfort gérable. Un équipement adapté, une bonne préparation et un encadrement expérimenté sont essentiels.")
  },
  faq: {
    index: "06 / QUESTIONS", title: "Avant de faire votre sac.",
    phoneQ: "Puis-je utiliser mon téléphone et mes proches peuvent-ils me joindre ?", phoneA: "Oui. Vous pouvez utiliser votre téléphone si vous en avez vraiment besoin, mais nous vous proposons de le laisser en sécurité et d’essayer de vivre la semaine sans lui. Le camp reste joignable si un proche doit vous contacter.",
    experienceQ: "Faut-il avoir de l’expérience en randonnée ou en camping ?", experienceA: "Aucune expérience préalable de randonnée ou de camping n’est requise. La semaine repose sur l’apprentissage par la pratique. Le parcours en montagne sera préparé et adapté au groupe afin que tout le monde puisse le réaliser.",
    survivalQ: "S’agit-il d’un stage de survie et quel matériel est fourni ?", survivalA: "Non. La nuit en montagne est un défi en plein air planifié, pas un stage de survie. Le camp fournit des sacs à dos adaptés, des tentes fiables, des sacs de couchage convenant à des températures proches de 0°C et le matériel collectif nécessaire.",
    costQ: "Quand aura lieu le séjour et combien coûtera-t-il ?", costA: "Les dates et le prix du premier projet pilote ne sont pas encore définitifs. Rejoignez la liste pilote et nous communiquerons les détails à l’ouverture des candidatures.",
    englishQ: "Dois-je parler anglais couramment ?", englishA: "Non. L’anglais est la langue commune du camp, mais il ne doit pas être votre langue maternelle. L’idée est d’utiliser l’anglais naturellement en cuisinant, en marchant, en parlant et en passant du temps ensemble, pas de le parler parfaitement.",
    sleepQ: "Où dormons-nous ?", sleepA: "Le camp de base propose un hébergement simple en plein air dans un environnement rural, avec des tentes et l’accès aux installations de base nécessaires pour la semaine. Une nuit est passée en montagne pendant l’expédition. Les détails précis seront communiqués avant la réservation.",
    foodQ: "Qu’allons-nous manger ?", foodA: "Les repas font partie de l’expérience collective. Le déjeuner est préparé frais par une personne de la région, avec des plats simples et des ingrédients locaux. Nous préparons le dîner ensemble. Les régimes alimentaires et allergies seront recueillis lors de l’inscription afin que l’équipe puisse confirmer ce qui peut être adapté."
  },
  reset: { imageAlt: "Deux tentes en toile et un feu de camp brillent près d’une grange en bois dans un jardin du Maramureș.", title: "Moins numérique.<br><em>Plus analogique.</em>" },
  pilot: { stamp: "PILOTE<br>001", eyebrow: "Tout commence à petite échelle", title: "10–12 personnes.<br>7 jours.<br><em>0 algorithme pour décider de la suite.</em>" },
  signup: {
    index: "REJOINDRE / PILOTE 001", title: "Venez avec nous.", copy: "Le premier camp sera volontairement petit. Rejoignez la liste pilote pour savoir quand les candidatures ouvriront et contribuer à façonner l’avenir d’Unplug to Reconnect.",
    emailLabel: "Votre e-mail", emailPlaceholder: "vous@exemple.fr", submit: "Tenez-moi au courant", consent: "J’accepte de recevoir occasionnellement des nouvelles du projet pilote. Rien pour remplir votre fil.",
    note: "Formulaire prototype : les réponses ne seront pas envoyées tant qu’un service de liste de diffusion ne sera pas connecté.", invalidEmail: "Saisissez une adresse e-mail valide.", consentRequired: "Veuillez confirmer que vous acceptez de recevoir des nouvelles occasionnelles.", success: "Tout est prêt. Connectez le service de liste de diffusion pour commencer à recueillir les inscriptions."
  },
  footer: { line: "Déconnectons-nous un moment de nos mondes numériques pour nous reconnecter à la nature, aux autres et aux choses simples.", less: "MOINS NUMÉRIQUE.", more: "PLUS ANALOGIQUE.", top: "RETOUR EN HAUT ↑" }
};

const ro = {
  meta: {
    title: "Unplug to Reconnect: Mai puțin digital. Mai mult analog.",
    description: "O săptămână offline în Carpații Românești, în care tinerii adulți își pot găsi propria direcție prin natură, experiențe practice și conexiuni umane reale."
  },
  access: { skip: "Mergi direct în lumea reală", home: "Unplug to Reconnect, pagina principală", primaryNav: "Navigare principală", keyFacts: "Informații esențiale", switch: "De la digital la analog", outcomes: "Cu ce pleci acasă", route: "Traseul expediției", reset: "Mai puțin digital, mai mult analog" },
  nav: { menu: "Meniu", week: "Săptămâna", activities: "Ce vei face", expedition: "Expediția", glance: "Pe scurt", join: "Înscrie-te pe lista pilot", language: "Limbă" },
  hero: {
    imageAlt: "Un grup mic cu rucsacuri pleacă dintr-un sat de munte spre Carpați la răsărit.",
    fieldTest: "TEST PE TEREN 001", location: "CARPAȚI / RO", signalLeaving: "...IEȘIM DIN SEMNAL", signalGone: "...FĂRĂ SEMNAL",
    eyebrow: "Unplug to Reconnect prezintă", title: "O săptămână <em>offline.</em><br><em>Mai puțin digital.</em><br>Mai mult analog.",
    lede: "O experiență de o săptămână în aer liber pentru tineri adulți, într-un colț rural al Carpaților Românești.", seeWeek: "Vezi săptămâna",
    people: "10–12 PERSOANE", days: "7 ZILE", ages: "18–25 ANI"
  },
  point: {
    index: "01 / IDEEA", title: "Ia o pauză de o săptămână de la zgomotul digital.",
    copy: "<p>Între 18 și 25 de ani, mulți dintre noi luăm primele decizii importante despre studii, muncă, relații, locul în care vrem să trăim și felul de viață pe care ni-l dorim.</p><p>În același timp, mare parte din ceea ce vedem, auzim și folosim pentru a ne compara cu ceilalți vine printr-un ecran.</p><p><strong>Nu oferim răspunsuri. Creăm un mediu diferit în care îți poți găsi propria direcție, inspirație sau perspectivă făcând lucruri concrete, petrecând timp în natură și vorbind față în față cu alți oameni.</strong></p>",
    digital: "DIGITAL", analogue: "ANALOG", phone: "Telefonul tău va supraviețui o săptămână fără tine."
  },
  outcomes: {
    resetTitle: "Resetare digitală", resetCopy: "Mută tehnologia din centrul vieții de zi cu zi pentru o săptămână și observă ce se schimbă atunci când telefonul nu mai este locul spre care te îndrepți automat.",
    confidenceTitle: "Încredere", confidenceCopy: "Fă drumeții, gătește, campează, învață abilități practice, asumă-ți responsabilități și descoperă mai mult din ceea ce poți face singur.",
    connectionTitle: "Conexiune reală", connectionCopy: "Trăiește, lucrează, mănâncă, contrazice-te, râzi și petrece timp cu un grup mic de oameni, față în față."
  },
  day: {
    index: "02 / O ZI OBIȘNUITĂ ÎN TABĂRĂ", title: "Un ritm general, nu un program încărcat.", intro: "Fiecare zi va fi puțin diferită, dar cele mai multe urmează aceeași structură simplă. Este timp pentru învățat, timp pentru a ajuta la viața taberei și destul timp în care nu este programat nimic.",
    breakfastLabel: "01 / MIC DEJUN", breakfast: schedule("Începe încet", "Mâncăm împreună, bem cafea sau ceai, verificăm vremea și ne pregătim pentru zi."),
    workshopLabel: "02 / ATELIER DE DIMINEAȚĂ", workshop: schedule("Învață sau discută", "O sesiune practică în care învățăm făcând, sau o sesiune de discuții și dezbateri în care explorăm împreună un subiect."),
    lunchLabel: "03 / PRÂNZ", lunch: schedule("Mâncăm împreună", "Un bucătar local pregătește mâncare proaspătă și tradițională din regiune, acel fel generos de mâncare pe care l-ar pune pe masă o bunică din România."),
    afternoonLabel: "04 / DUPĂ-AMIAZĂ LIBERĂ", afternoon: schedule("Nimic programat", "Citește, dormi, plimbă-te, joacă cărți, ajută în grădină sau vorbește. Să petreci timp nestructurat fără să iei automat telefonul face parte din experiență."),
    dinnerLabel: "05 / CINĂ", dinner: schedule("Gătim împreună", "Toată lumea ajută la pregătirea cinei, la curățenie și la îngrijirea taberei."),
    eveningLabel: "06 / SEARĂ", evening: schedule("Foc de tabără, jocuri, conversații", "După cină vin muzica, conversațiile și stelele."),
    pauseLabel: "TIMP NESTRUCTURAT / 01", pauseTitle: "PLICTISEALA<br>ESTE PERMISĂ",
    imageAlt: "Tineri adulți pregătesc cina împreună la o masă de lemn, lângă o casă rurală.", caption: "SEARĂ / ECHIPA DE CINĂ / CAMERA 02"
  },
  workshops: {
    index: "03 / ÎNVĂȚĂM ÎMPREUNĂ", eyebrow: "Atelierul de dimineață", title: "Poate avea<br><em>forme diferite.</em>",
    intro: "<p>Unele dimineți se concentrează pe <strong>abilități practice</strong>, învățăm ceva făcând acel lucru cu adevărat.</p><p>Alte dimineți sunt dedicate <strong>atelierelor de discuții și dezbateri</strong>, o ocazie de a explora un subiect, de a asculta perspective diferite, de a pune întrebări și de a-ți forma propria opinie.</p><p>Combinația exactă nu este fixă. Depinde de participanți, mentori, oamenii din comunitate și loc.</p>",
    format1: "FORMAT 01", practicalTitle: "Practic", possibleWorkshops: "Ateliere posibile",
    practicalList: list(["Foc de tabără", "Orientare", "Pregătirea unei drumeții", "Organizarea taberei", "Alimentație și nutriție", "Lucrul cu lemnul", "Meșteșuguri rurale tradiționale"]),
    practicalNote: "Conduse de mentori, meșteșugari sau localnici cu experiență practică.",
    format2: "FORMAT 02", discussionTitle: "Discuție / dezbatere", possibleTopics: "Subiecte posibile",
    discussionList: list(["Relații", "Gen", "Rețele sociale", "Climă", "Politică", "Consum", "Succes", "Viața de adult"]),
    discussionNote: "Un mentor sau un moderator pune întrebări utile și creează spațiu pentru perspective diferite, nu pentru un singur răspuns ‘corect’.",
    role: "ROLUL NOSTRU: CREĂM MEDIUL / NU DICTĂM RĂSPUNSUL"
  },
  mountain: {
    imageAlt: "Un grup mic stă în jurul unui foc de tabără, lângă corturi, sub un cer montan plin de stele.", index: "04 / NOAPTEA PE MUNTE", eyebrow: "Plecăm pe jos din tabără.",
    title: "Petrece o noapte<br><em>în munți.</em>",
    copy: "<p>Una dintre experiențele definitorii ale săptămânii este o expediție de o noapte în munți, cu plecare direct din tabără.</p><p>Plecăm pe jos cu rucsacurile, corturile, sacii de dormit, mâncarea și echipamentul. Urcăm în munți, instalăm tabăra, gătim, petrecem seara afară, dormim acolo, privim răsăritul, împachetăm totul și ne întoarcem pe jos la bază a doua zi.</p><p><strong>Fără autocar de excursie. Fără drum până la o atracție turistică. Plecăm și revenim pe jos, direct din tabără.</strong></p><p>Este o provocare reală, cu un anumit disconfort asumat, dar nu este antrenament de supraviețuire. Conducerea cu experiență, planificarea atentă, echipamentul potrivit și siguranța rămân fundamentale.</p>",
    pack: "ÎMPACHETĂM", walk: "MERGEM", camp: "CAMPĂM", sunrise: "RĂSĂRIT", home: "ÎNAPOI", kit: "ECHIPAMENT OFERIT", backpacks: "RUCSACURI POTRIVITE", tents: "CORTURI FIABILE", sleepingBags: "SACI DE DORMIT / ~0°C", sharedGear: "ECHIPAMENT COMUN DE CAMPING"
  },
  glance: {
    index: "05 / SĂPTĂMÂNA PE SCURT", title: "Tot ce contează<br><em>într-un singur loc.</em>",
    who: fact("PENTRU CINE", "18–25 ani"), group: fact("GRUP", "10–12 participanți + două gazde"), duration: fact("DURATĂ", "O săptămână"),
    place: fact("LOC", "O comunitate rurală din Carpații Românești"), language: fact("LIMBĂ", "Engleză"), dates: fact("DATE + PREȚ", "Vor fi anunțate pentru ediția pilot"),
    format: fact("FORMAT", "Viață în aer liber, mese împreună, ateliere dimineața, după-amiezi libere, seri petrecute împreună și o expediție de o noapte în munți"),
    phones: fact("TELEFOANE", "Îți poți folosi telefonul dacă ai într-adevăr nevoie, dar îți propunem să îl păstrezi în siguranță și să încerci să petreci săptămâna fără el. Tabăra rămâne accesibilă dacă cineva de acasă trebuie să te contacteze."),
    safety: fact("SIGURANȚĂ", "Săptămâna include drumeții, viață în aer liber și un disconfort ușor de gestionat. Echipamentul potrivit, planificarea și conducerea cu experiență sunt fundamentale.")
  },
  faq: {
    index: "06 / ÎNTREBĂRI", title: "Înainte să îți faci bagajul.",
    phoneQ: "Pot să îmi folosesc telefonul și mă poate contacta cineva de acasă?", phoneA: "Da. Îți poți folosi telefonul dacă ai într-adevăr nevoie, dar îți propunem să îl păstrezi în siguranță și să încerci să petreci săptămâna fără el. Tabăra rămâne accesibilă dacă cineva de acasă trebuie să te contacteze.",
    experienceQ: "Am nevoie de experiență în drumeții sau camping?", experienceA: "Nu este necesară experiență anterioară în drumeții sau camping. Săptămâna este construită în jurul învățării prin practică, iar traseul montan va fi planificat și adaptat grupului astfel încât toată lumea să îl poată parcurge.",
    survivalQ: "Este antrenament de supraviețuire și ce echipament este oferit?", survivalA: "Nu. Noaptea pe munte este o provocare planificată în aer liber, nu un antrenament de supraviețuire. Tabăra oferă rucsacuri potrivite, corturi fiabile, saci de dormit pentru temperaturi în jur de 0°C și echipamentul comun necesar.",
    costQ: "Când are loc și cât va costa?", costA: "Datele și prețul primei ediții pilot nu sunt încă stabilite. Înscrie-te pe lista pilot și îți vom trimite detaliile când se deschid aplicațiile.",
    englishQ: "Trebuie să vorbesc fluent engleză?", englishA: "Nu. Engleza este limba comună a taberei, dar nu trebuie să fie limba ta maternă. Ideea este să folosești engleza firesc în timp ce gătești, mergi pe munte, vorbești și petreci timp cu ceilalți, nu să o vorbești perfect.",
    sleepQ: "Unde dormim?", sleepA: "Tabăra de bază folosește cazare simplă în aer liber, într-un cadru rural, cu corturi și acces la facilitățile de bază necesare pentru săptămână. O noapte este petrecută în munți, ca parte a expediției. Detaliile exacte despre cazare vor fi comunicate înainte de rezervare.",
    foodQ: "Ce vom mânca?", foodA: "Mesele fac parte din experiența comună. Prânzul este pregătit proaspăt de un bucătar local, cu mâncare simplă și ingrediente locale. Cina o pregătim împreună. Preferințele alimentare și alergiile vor fi colectate la înscriere, astfel încât echipa să poată confirma ce poate fi adaptat."
  },
  reset: { imageAlt: "Două corturi din pânză și un foc de tabără luminează lângă un hambar din lemn, într-o grădină din Maramureș.", title: "Mai puțin digital.<br><em>Mai mult analog.</em>" },
  pilot: { stamp: "PILOT<br>001", eyebrow: "Începem cu puțini oameni", title: "10–12 persoane.<br>7 zile.<br><em>0 algoritmi care decid ce urmează.</em>" },
  signup: {
    index: "ÎNSCRIERI / PILOT 001", title: "Vino cu noi.", copy: "Prima tabără va fi intenționat mică. Înscrie-te pe lista pilot pentru a afla când se deschid aplicațiile și pentru a contribui la ceea ce va deveni Unplug to Reconnect.",
    emailLabel: "Adresa ta de e-mail", emailPlaceholder: "tu@exemplu.ro", submit: "Ține-mă la curent", consent: "Sunt de acord să primesc ocazional noutăți despre ediția pilot. Fără mesaje inutile.",
    note: "Formular prototip: răspunsurile nu sunt trimise până când nu este conectat un serviciu de listă de e-mail.", invalidEmail: "Introdu o adresă de e-mail validă.", consentRequired: "Confirmă că ești de acord să primești ocazional noutăți.", success: "Totul arată bine. Conectează serviciul de e-mail pentru a începe colectarea înscrierilor."
  },
  footer: { line: "Hai să ne deconectăm pentru o clipă de lumile digitale și să ne reconectăm cu natura, oamenii și lucrurile simple.", less: "MAI PUȚIN DIGITAL.", more: "MAI MULT ANALOG.", top: "ÎNAPOI SUS ↑" }
};

const es = {
  meta: {
    title: "Unplug to Reconnect: Menos digital. Más analógico.",
    description: "Una semana sin conexión en los Cárpatos rumanos para que jóvenes adultos encuentren su propia dirección a través de la naturaleza, la experiencia práctica y la conexión humana real."
  },
  access: { skip: "Ir directamente al mundo real", home: "Unplug to Reconnect, inicio", primaryNav: "Navegación principal", keyFacts: "Datos clave", switch: "De digital a analógico", outcomes: "Lo que te llevas", route: "Ruta de la expedición", reset: "Menos digital, más analógico" },
  nav: { menu: "Menú", week: "La semana", activities: "Qué harás", expedition: "La expedición", glance: "De un vistazo", join: "Únete a la lista piloto", language: "Idioma" },
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
    confidenceTitle: "Confianza", confidenceCopy: "Camina, cocina, acampa, aprende habilidades prácticas, asume responsabilidades y descubre mejor todo lo que puedes hacer por ti mismo.",
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
    imageAlt: "Jóvenes adultos preparan la cena juntos en una mesa de madera frente a una casa rural.", caption: "NOCHE / EQUIPO DE CENA / CÁMARA 02"
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
    index: "ÚNETE / PILOTO 001", title: "Ven con nosotros.", copy: "El primer campamento será pequeño a propósito. Únete a la lista piloto para saber cuándo se abren las solicitudes y ayudar a dar forma a lo que será Unplug to Reconnect.",
    emailLabel: "Tu correo electrónico", emailPlaceholder: "tu@ejemplo.es", submit: "Mantenme al tanto", consent: "Acepto recibir noticias ocasionales sobre el programa piloto. Nada de rellenar tu feed.",
    note: "Formulario de prototipo: las respuestas no se enviarán hasta que se conecte un servicio de listas de correo.", invalidEmail: "Introduce una dirección de correo válida.", consentRequired: "Confirma que aceptas recibir noticias ocasionales.", success: "Todo listo. Conecta el servicio de correo para empezar a recoger inscripciones."
  },
  footer: { line: "Desconectemos un momento de nuestros mundos digitales y volvamos a conectar con la naturaleza, las personas y las cosas sencillas.", less: "MENOS DIGITAL.", more: "MÁS ANALÓGICO.", top: "VOLVER ARRIBA ↑" }
};

const it = {
  meta: {
    title: "Unplug to Reconnect: Meno digitale. Più analogico.",
    description: "Una settimana offline nei Carpazi rumeni, per dare ai giovani adulti lo spazio di trovare la propria direzione attraverso la natura, le esperienze pratiche e le relazioni umane."
  },
  access: { skip: "Vai direttamente al mondo reale", home: "Unplug to Reconnect, home", primaryNav: "Navigazione principale", keyFacts: "Informazioni chiave", switch: "Da digitale ad analogico", outcomes: "Cosa porti con te", route: "Percorso della spedizione", reset: "Meno digitale, più analogico" },
  nav: { menu: "Menu", week: "La settimana", activities: "Cosa farai", expedition: "La spedizione", glance: "In breve", join: "Unisciti alla lista pilota", language: "Lingua" },
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
    confidenceTitle: "Fiducia", confidenceCopy: "Cammina, cucina, campeggia, impara abilità pratiche, assumiti responsabilità e scopri meglio ciò che sai fare da solo.",
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
    imageAlt: "Giovani adulti preparano insieme la cena su un tavolo di legno davanti a una casa rurale.", caption: "SERA / SQUADRA CENA / FOTOCAMERA 02"
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
    index: "PARTECIPA / PILOTA 001", title: "Vieni con noi.", copy: "Il primo campo sarà volutamente piccolo. Unisciti alla lista pilota per sapere quando apriranno le candidature e contribuire a dare forma a ciò che diventerà Unplug to Reconnect.",
    emailLabel: "La tua e-mail", emailPlaceholder: "tu@esempio.it", submit: "Tienimi aggiornato", consent: "Accetto di ricevere occasionalmente aggiornamenti sul progetto pilota. Niente contenuti riempitivi.",
    note: "Modulo prototipo: le risposte non verranno inviate finché non sarà collegato un servizio di mailing list.", invalidEmail: "Inserisci un indirizzo e-mail valido.", consentRequired: "Conferma che accetti di ricevere aggiornamenti occasionali.", success: "Tutto pronto. Collega il servizio di mailing list per iniziare a raccogliere le iscrizioni."
  },
  footer: { line: "Disconnettiamoci per un momento dai nostri mondi digitali e riconnettiamoci con la natura, le persone e le cose semplici.", less: "MENO DIGITALE.", more: "PIÙ ANALOGICO.", top: "TORNA SU ↑" }
};

window.U2R_TRANSLATIONS = { en, de, fr, ro, es, it };
