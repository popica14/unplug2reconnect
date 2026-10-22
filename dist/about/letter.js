(() => {
  const dict = window.U2R_LETTER || {};
  const locales = ["en", ...Object.keys(dict)];
  const details = {
    en: { flag: "🇬🇧", code: "EN", label: "Language" },
    de: { flag: "🇩🇪", code: "DE", label: "Sprache" },
    fr: { flag: "🇫🇷", code: "FR", label: "Langue" },
    ro: { flag: "🇷🇴", code: "RO", label: "Limbă" },
    es: { flag: "🇪🇸", code: "ES", label: "Idioma" },
    it: { flag: "🇮🇹", code: "IT", label: "Lingua" }
  };

  const picker = document.querySelector("[data-language-picker]");
  const trigger = document.querySelector("[data-language-trigger]");
  const menu = document.querySelector("[data-language-menu]");
  const flag = document.querySelector("[data-language-flag]");
  const code = document.querySelector("[data-language-code]");
  const options = [...document.querySelectorAll("[data-locale]")];
  const metaDescription = document.querySelector('meta[name="description"]');

  const all = (attribute) => [...document.querySelectorAll(`[${attribute}]`)];
  const textEls = all("data-i18n");
  const htmlEls = all("data-i18n-html");
  const altEls = all("data-i18n-alt");
  const ariaEls = all("data-i18n-aria-label");

  // English is whatever the HTML already says.
  const en = { title: document.title, desc: metaDescription?.content ?? "" };
  textEls.forEach((el) => { en[el.dataset.i18n] = el.textContent; });
  htmlEls.forEach((el) => { en[el.dataset.i18nHtml] = el.innerHTML; });
  altEls.forEach((el) => { en[el.dataset.i18nAlt] = el.alt; });
  ariaEls.forEach((el) => { en[el.dataset.i18nAriaLabel] = el.getAttribute("aria-label"); });

  const t = (locale, key) => dict[locale]?.[key] ?? en[key];
  let current = "en";

  const apply = (locale, updateUrl = false) => {
    current = locales.includes(locale) ? locale : "en";
    document.documentElement.lang = current;
    document.title = t(current, "title");
    if (metaDescription) metaDescription.content = t(current, "desc");

    textEls.forEach((el) => { el.textContent = t(current, el.dataset.i18n); });
    htmlEls.forEach((el) => { el.innerHTML = t(current, el.dataset.i18nHtml); });
    altEls.forEach((el) => { el.alt = t(current, el.dataset.i18nAlt); });
    ariaEls.forEach((el) => { el.setAttribute("aria-label", t(current, el.dataset.i18nAriaLabel)); });

    const detail = details[current] || details.en;
    if (flag) flag.textContent = detail.flag;
    if (code) code.textContent = detail.code;
    trigger?.setAttribute("aria-label", detail.label);
    menu?.setAttribute("aria-label", detail.label);
    options.forEach((option) => option.setAttribute("aria-selected", String(option.dataset.locale === current)));

    try {
      window.localStorage.setItem("u2r-locale", current);
    } catch {
      // Works without storage.
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", current);
      window.history.replaceState({}, "", url);
    }
  };

  const setMenu = (open, focusSelected = false) => {
    picker?.classList.toggle("is-open", open);
    trigger?.setAttribute("aria-expanded", String(open));
    if (open && focusSelected) options.find((option) => option.dataset.locale === current)?.focus();
  };

  trigger?.addEventListener("click", () => {
    const willOpen = trigger.getAttribute("aria-expanded") !== "true";
    setMenu(willOpen, willOpen);
  });

  trigger?.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    setMenu(true);
    const target = event.key === "ArrowUp" ? options.at(-1) : options.find((option) => option.dataset.locale === current);
    target?.focus();
  });

  menu?.addEventListener("click", (event) => {
    const option = event.target.closest("[data-locale]");
    if (!option) return;
    apply(option.dataset.locale, true);
    setMenu(false);
    trigger?.focus();
  });

  menu?.addEventListener("keydown", (event) => {
    const index = options.indexOf(document.activeElement);
    let next = index;
    if (event.key === "ArrowDown") next = (index + 1) % options.length;
    else if (event.key === "ArrowUp") next = (index - 1 + options.length) % options.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = options.length - 1;
    else if (event.key === "Escape") {
      event.preventDefault();
      setMenu(false);
      trigger?.focus();
      return;
    } else return;
    event.preventDefault();
    options[next]?.focus();
  });

  document.addEventListener("click", (event) => {
    if (picker && !picker.contains(event.target)) setMenu(false);
  });

  const requested = new URLSearchParams(window.location.search).get("lang");
  const saved = (() => {
    try {
      return window.localStorage.getItem("u2r-locale");
    } catch {
      return null;
    }
  })();
  const browser = navigator.language?.split("-")[0];

  apply(
    locales.includes(requested) ? requested
      : locales.includes(saved) ? saved
        : locales.includes(browser) ? browser
          : "en"
  );
})();
