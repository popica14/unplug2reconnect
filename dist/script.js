const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const signalLabel = document.querySelector("[data-signal-label]");
const form = document.querySelector("[data-interest-form]");
const languagePicker = document.querySelector("[data-language-picker]");
const languageTrigger = document.querySelector("[data-language-trigger]");
const languageMenu = document.querySelector("[data-language-menu]");
const languageFlag = document.querySelector("[data-language-flag]");
const languageCode = document.querySelector("[data-language-code]");
const languageOptions = [...document.querySelectorAll("[data-locale]")];
const translations = window.U2R_TRANSLATIONS || {};
const supportedLocales = Object.keys(translations);
const localeDetails = {
  en: { flag: "🇬🇧", code: "EN" },
  de: { flag: "🇩🇪", code: "DE" },
  fr: { flag: "🇫🇷", code: "FR" },
  ro: { flag: "🇷🇴", code: "RO" },
  es: { flag: "🇪🇸", code: "ES" },
  it: { flag: "🇮🇹", code: "IT" }
};
let currentLocale = "en";

const getTranslation = (locale, key) =>
  key.split(".").reduce((value, part) => value?.[part], translations[locale]);

const translate = (key) =>
  getTranslation(currentLocale, key) ?? getTranslation("en", key) ?? key;

const savedLocale = (() => {
  try {
    return window.localStorage.getItem("u2r-locale");
  } catch {
    return null;
  }
})();

const requestedLocale = new URLSearchParams(window.location.search).get("lang");
const browserLocale = navigator.language?.split("-")[0];

const applyLocale = (locale, updateUrl = false) => {
  currentLocale = supportedLocales.includes(locale) ? locale : "en";
  document.documentElement.lang = currentLocale;
  document.title = translate("meta.title");

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = translate("meta.description");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.alt = translate(element.dataset.i18nAlt);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAriaLabel));
  });

  const localeDetail = localeDetails[currentLocale] || localeDetails.en;
  if (languageFlag) languageFlag.textContent = localeDetail.flag;
  if (languageCode) languageCode.textContent = localeDetail.code;
  languageOptions.forEach((option) => {
    option.setAttribute("aria-selected", String(option.dataset.locale === currentLocale));
  });
  if (signalLabel) signalLabel.textContent = translate(window.scrollY > 48 ? "hero.signalGone" : "hero.signalLeaving");
  const formMessage = form?.querySelector(".form-message");
  if (formMessage) formMessage.textContent = "";
  window.u2rOnLocaleChange?.();

  try {
    window.localStorage.setItem("u2r-locale", currentLocale);
  } catch {
    // The page still works when storage is unavailable.
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", currentLocale);
    window.history.replaceState({}, "", url);
  }
};

applyLocale(
  supportedLocales.includes(requestedLocale)
    ? requestedLocale
    : supportedLocales.includes(savedLocale)
      ? savedLocale
      : supportedLocales.includes(browserLocale)
        ? browserLocale
        : "en"
);

const setLanguageMenu = (open, focusSelected = false) => {
  languagePicker?.classList.toggle("is-open", open);
  languageTrigger?.setAttribute("aria-expanded", String(open));
  if (open && focusSelected) {
    languageOptions.find((option) => option.dataset.locale === currentLocale)?.focus();
  }
};

const chooseLocale = (locale) => {
  applyLocale(locale, true);
  setLanguageMenu(false);
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
};

languageTrigger?.addEventListener("click", () => {
  const willOpen = languageTrigger.getAttribute("aria-expanded") !== "true";
  setLanguageMenu(willOpen, willOpen);
});

languageTrigger?.addEventListener("keydown", (event) => {
  if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
  event.preventDefault();
  setLanguageMenu(true);
  const target = event.key === "ArrowUp"
    ? languageOptions.at(-1)
    : languageOptions.find((option) => option.dataset.locale === currentLocale);
  target?.focus();
});

languageMenu?.addEventListener("click", (event) => {
  const option = event.target.closest("[data-locale]");
  if (option) chooseLocale(option.dataset.locale);
});

languageMenu?.addEventListener("keydown", (event) => {
  const currentIndex = languageOptions.indexOf(document.activeElement);
  let nextIndex = currentIndex;

  if (event.key === "ArrowDown") nextIndex = (currentIndex + 1) % languageOptions.length;
  else if (event.key === "ArrowUp") nextIndex = (currentIndex - 1 + languageOptions.length) % languageOptions.length;
  else if (event.key === "Home") nextIndex = 0;
  else if (event.key === "End") nextIndex = languageOptions.length - 1;
  else if (event.key === "Escape") {
    event.preventDefault();
    setLanguageMenu(false);
    languageTrigger?.focus();
    return;
  } else return;

  event.preventDefault();
  languageOptions[nextIndex]?.focus();
});

document.addEventListener("click", (event) => {
  if (languagePicker && !languagePicker.contains(event.target)) setLanguageMenu(false);
});

const updateScrollState = () => {
  const scrolled = window.scrollY > 48;
  header?.classList.toggle("is-scrolled", scrolled);
  document.body.classList.toggle("is-offline", window.scrollY > window.innerHeight * 0.55);
  if (signalLabel) signalLabel.textContent = translate(scrolled ? "hero.signalGone" : "hero.signalLeaving");
};

updateScrollState();
window.addEventListener("scroll", updateScrollState, { passive: true });

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation?.classList.toggle("is-open", !isOpen);
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuButton?.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const reveals = document.querySelectorAll(".reveal");

if (prefersReducedMotion || !("IntersectionObserver" in window)) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12 }
  );
  reveals.forEach((element) => revealObserver.observe(element));
}

document.querySelectorAll("details").forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    document.querySelectorAll("details[open]").forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});

// ---- Pilot interest sign-up -------------------------------------------------
// The count shown here is always the real number from /api/signup. It is never faked or seeded.
const signupGoal = 50;
const progressBox = document.querySelector("[data-progress]");
const progressText = document.querySelector("[data-progress-text]");
const progressBar = document.querySelector("[data-progress-bar]");
const doneBox = document.querySelector("[data-signup-done]");
let signupCount = null;

const formatTemplate = (key, values) =>
  Object.entries(values).reduce((text, [name, value]) => text.split(`{${name}}`).join(value), translate(key));

const countLine = (count) =>
  count >= signupGoal
    ? translate("signup.goalReached")
    : formatTemplate("signup.progress", { count: String(count), goal: String(signupGoal) });

const renderProgress = () => {
  if (signupCount === null) return; // unknown (still loading or the request failed): show nothing rather than guess
  const reached = signupCount >= signupGoal;

  if (progressText) {
    progressText.textContent = countLine(signupCount);
    progressText.hidden = false;
  }
  if (progressBar) {
    progressBar.hidden = false;
    progressBar.setAttribute("aria-valuenow", String(Math.min(signupCount, signupGoal)));
    progressBar.setAttribute("aria-valuetext", reached ? translate("signup.goalReached") : countLine(signupCount));
    const fill = progressBar.querySelector("span");
    if (fill) fill.style.width = `${Math.min(100, (signupCount / signupGoal) * 100)}%`;
  }
  const doneCount = document.querySelector("[data-done-count]");
  if (doneCount && doneBox && !doneBox.hidden) {
    doneCount.textContent = countLine(signupCount);
    doneCount.hidden = false;
  }
};

const loadSignupCount = async () => {
  if (!progressBox) return;
  try {
    const response = await fetch("/api/signup", { headers: { Accept: "application/json" } });
    const data = await response.json();
    if (response.ok && data.ok && Number.isInteger(data.count)) {
      signupCount = data.count;
      renderProgress();
    }
  } catch {
    // Offline or no backend yet: the section simply shows no number.
  }
};

let doneState = null; // "new" or "duplicate", kept so a language change can re-translate the message

const renderDone = () => {
  if (!doneBox || !doneState) return;
  const title = doneBox.querySelector("[data-signup-done-title]");
  const body = doneBox.querySelector("[data-signup-done-body]");
  const extra = doneBox.querySelector("[data-signup-done-extra]");

  if (doneState.kind === "duplicate") {
    title.textContent = translate("signup.duplicate");
    body.textContent = "";
    body.hidden = true;
    extra.hidden = true;
  } else {
    title.textContent = translate("signup.doneTitle");
    body.textContent = `${translate("signup.doneThanks")} ${translate("signup.doneBody")}`;
    body.hidden = false;
    extra.textContent = translate("signup.doneQuestion");
    extra.hidden = !doneState.hadQuestion;
  }
  renderProgress();
};

const showDone = (kind, hadQuestion) => {
  doneState = { kind, hadQuestion };
  form.hidden = true;
  doneBox.hidden = false;
  renderDone();
  doneBox.focus();
};

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = form.querySelector(".form-message");
  const email = form.querySelector("input[type='email']");
  const consent = form.querySelector("input[name='consent']");
  const note = form.querySelector("textarea[name='message']");
  const question = form.querySelector("textarea[name='question']");
  const honeypot = form.querySelector("input[name='website']");
  const submit = form.querySelector("button[type='submit']");

  if (!email.validity.valid) {
    message.textContent = translate("signup.invalidEmail");
    email.focus();
    return;
  }

  if (!consent.checked) {
    message.textContent = translate("signup.consentRequired");
    consent.focus();
    return;
  }

  submit.disabled = true;
  message.textContent = translate("signup.sending");

  try {
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value.trim(),
        message: note.value,
        question: question.value,
        consent: true,
        language: currentLocale,
        website: honeypot ? honeypot.value : ""
      })
    });
    const result = await response.json().catch(() => ({}));

    if (response.ok && result.ok) {
      if (Number.isInteger(result.count)) signupCount = result.count;
      const hadQuestion = question.value.trim() !== "";
      message.textContent = "";
      form.reset();
      showDone(result.duplicate ? "duplicate" : "new", hadQuestion);
    } else if (result.error === "invalid_email") {
      message.textContent = translate("signup.invalidEmail");
      email.focus();
    } else if (result.error === "consent_required") {
      message.textContent = translate("signup.consentRequired");
      consent.focus();
    } else if (result.error === "too_long") {
      message.textContent = translate("signup.tooLong");
    } else {
      message.textContent = translate("signup.error");
    }
  } catch {
    message.textContent = translate("signup.error");
  } finally {
    submit.disabled = false;
  }
});

loadSignupCount();

// Re-translate the progress line and the success message when the language changes.
window.u2rOnLocaleChange = () => {
  renderProgress();
  renderDone();
};


// Floating letter card: stays pinned while scrolling, can be dismissed, and steps aside at the sign-up form.
const letterFloat = document.querySelector("[data-letter-float]");

if (letterFloat) {
  const closeButton = letterFloat.querySelector("[data-letter-close]");
  const joinSection = document.getElementById("join");
  let dismissed = false;
  let joinVisible = false;

  const syncLetterFloat = () => {
    letterFloat.classList.toggle("is-hidden", dismissed || joinVisible);
  };

  // Closing hides the card for this page view only; a refresh brings it back.
  closeButton?.addEventListener("click", () => {
    dismissed = true;
    syncLetterFloat();
  });

  if (joinSection && "IntersectionObserver" in window) {
    new IntersectionObserver(
      ([entry]) => {
        joinVisible = entry.isIntersecting;
        syncLetterFloat();
      },
      { rootMargin: "0px 0px -15% 0px" }
    ).observe(joinSection);
  }

  syncLetterFloat();
}


// The digital / analogue switch: purely playful, it only flips its own state.
const phoneSwitch = document.querySelector("[data-switch]");
phoneSwitch?.addEventListener("click", () => {
  phoneSwitch.setAttribute("aria-checked", String(phoneSwitch.getAttribute("aria-checked") !== "true"));
});
