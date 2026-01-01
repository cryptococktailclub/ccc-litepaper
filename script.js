/* =====================================================
   Crypto Cocktail Club — Litepaper
   script.js
   ===================================================== */

(function () {
  const BODY = document.body;
  const MODE_BTNS = document.querySelectorAll(".mode-btn");
  const HEADER = document.querySelector(".top-nav");

  const STORAGE_KEY = "ccc-litepaper-theme";

  /* -----------------------------
     APPLY THEME
  ----------------------------- */

  function applyTheme(theme) {
    BODY.classList.remove("theme-base", "theme-gold", "theme-platinum");
    BODY.classList.add(`theme-${theme}`);

    MODE_BTNS.forEach(btn => {
      btn.classList.toggle("active", btn.dataset.theme === theme);
    });

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {}
  }

  /* -----------------------------
     LOAD SAVED THEME
  ----------------------------- */

  function loadSavedTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) applyTheme(saved);
    } catch (e) {}
  }

  /* -----------------------------
     MODE BUTTONS
  ----------------------------- */

  MODE_BTNS.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      if (!theme) return;
      applyTheme(theme);
    });
  });

/* ---------- HEADER REVEAL ---------- */

const HEADER = document.querySelector(".top-nav");

function revealHeader() {
  if (!HEADER) return;

  if (window.scrollY > 40) {
    HEADER.classList.add("is-visible");
  } else {
    HEADER.classList.remove("is-visible");
  }
}

/* Run immediately on load */
revealHeader();

/* Run on scroll */
window.addEventListener("scroll", revealHeader, { passive: true });


  /* -----------------------------
     CROSS-DOMAIN CONTEXT AWARENESS
  ----------------------------- */

  function markExternalContext() {
    const link = document.querySelector(".footer-link a");
    if (!link) return;

    if (window.location.hostname.includes("cryptococktailclub.com")) {
      link.textContent = "Enter the Virtual Bar (.club)";
    } else {
      link.textContent = "View Litepaper (.com)";
    }
  }

  /* -----------------------------
     INIT
  ----------------------------- */

  loadSavedTheme();
  handleScroll();
  markExternalContext();
})();
