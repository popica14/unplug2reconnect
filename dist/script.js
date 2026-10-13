const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");
const signalLabel = document.querySelector("[data-signal-label]");
const form = document.querySelector("[data-interest-form]");

const updateScrollState = () => {
  const scrolled = window.scrollY > 48;
  header?.classList.toggle("is-scrolled", scrolled);
  document.body.classList.toggle("is-offline", window.scrollY > window.innerHeight * 0.55);
  if (signalLabel) signalLabel.textContent = scrolled ? "NO SIGNAL" : "LEAVING SIGNAL";
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
    message.textContent = "Enter a valid email address to join the list.";
    email.focus();
    return;
  }

  if (!consent.checked) {
    message.textContent = "Please confirm that occasional pilot updates are okay.";
    consent.focus();
    return;
  }

  message.textContent = "You’re on the field list. We’ll be in touch when the pilot is ready.";
  form.reset();
});
