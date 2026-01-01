/* =====================================================
   Crypto Cocktail Club — Litepaper
   script.js
   ===================================================== */

(function () {
  const BODY = document.body;
  const MODE_BTNS = document.querySelectorAll(".mode-btn");
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
    } catch (e) {
      /* silently fail (privacy modes, etc.) */
    }
  }

  /* -----------------------------
     LOAD SAVED THEME
  ----------------------------- */

  function loadSavedTheme() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && BODY.classList.contains(`theme-${saved}`) === false) {
        applyTheme(saved);
      }
    } catch (e) {
      /* ignore */
    }
  }

  /* -----------------------------
     BUTTON HANDLERS
  ----------------------------- */

  MODE_BTNS.forEach(btn => {
    btn.addEventListener("click", () => {
      const theme = btn.dataset.theme;
      if (!theme) return;
      applyTheme(theme);
    });
  });

  /* -----------------------------
     INIT
  ----------------------------- */

  loadSavedTheme();
})();
