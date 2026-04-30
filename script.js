const revealTargets = document.querySelectorAll(
  ".programme-section, .programme-card, .tool-section, .workflow-section, .links-section, .feature-item, .workflow-step, .resource-link, .capability-grid article"
);

revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealTargets.forEach((element) => observer.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

const root = document.documentElement;
const themeToggle = document.querySelector(".theme-toggle");
const storedTheme = (() => {
  try {
    return window.localStorage.getItem("indos-theme");
  } catch {
    return null;
  }
})();
const prefersLight = window.matchMedia ? window.matchMedia("(prefers-color-scheme: light)").matches : false;
const initialTheme = storedTheme || (prefersLight ? "light" : "dark");

function setTheme(theme) {
  root.dataset.theme = theme;
  if (!themeToggle) return;
  const isLight = theme === "light";
  themeToggle.textContent = isLight ? "Dark theme" : "Light theme";
  themeToggle.setAttribute("aria-pressed", String(isLight));
}

setTheme(initialTheme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = root.dataset.theme === "light" ? "dark" : "light";
  try {
    window.localStorage.setItem("indos-theme", nextTheme);
  } catch {
    // Theme still changes for this session if browser storage is unavailable.
  }
  setTheme(nextTheme);
});

const modal = document.querySelector("#gallery-modal");
const modalImage = document.querySelector("#modal-image");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalClose = document.querySelector(".modal-close");
const galleryItems = document.querySelectorAll(".media-frame, .media-strip figure");

function openModal(figure) {
  const image = figure.querySelector("img");
  const caption = figure.querySelector("figcaption");
  if (!modal || !modalImage || !modalTitle || !modalDescription || !image) return;

  modalImage.src = image.currentSrc || image.src;
  modalImage.alt = image.alt;
  modalTitle.textContent = figure.dataset.title || caption?.textContent || image.alt;
  modalDescription.textContent = figure.dataset.detail || caption?.textContent || "";
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose?.focus();
}

function closeModal() {
  if (!modal || !modalImage) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");
}

galleryItems.forEach((figure) => {
  figure.tabIndex = 0;
  figure.setAttribute("role", "button");
  figure.setAttribute("aria-label", `Open ${figure.querySelector("figcaption")?.textContent || "feature image"}`);

  figure.addEventListener("click", () => openModal(figure));
  figure.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(figure);
    }
  });
});

modalClose?.addEventListener("click", closeModal);

modal?.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeModal();
  }
});
