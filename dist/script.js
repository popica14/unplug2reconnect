const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const signalLabel = document.querySelector("[data-signal-label]");
const form = document.querySelector("[data-interest-form]");
const languageSelect = document.querySelector("[data-language-select]");
const translations = window.U2R_TRANSLATIONS || {};
const supportedLocales = Object.keys(translations);
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

  if (languageSelect) languageSelect.value = currentLocale;
  if (signalLabel) signalLabel.textContent = translate(window.scrollY > 48 ? "hero.signalGone" : "hero.signalLeaving");
  const formMessage = form?.querySelector(".form-message");
  if (formMessage) formMessage.textContent = "";

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

languageSelect?.addEventListener("change", (event) => {
  applyLocale(event.target.value, true);
  menuButton?.setAttribute("aria-expanded", "false");
  navigation?.classList.remove("is-open");
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

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = form.querySelector(".form-message");
  const email = form.querySelector("input[type='email']");
  const consent = form.querySelector("input[name='consent']");

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

  message.textContent = translate("signup.success");
  form.reset();
});
