/* =====================================================
   Crypto Cocktail Club — Litepaper
   script.js (simplified, no theme switching)
   ===================================================== */

(function () {
  const HEADER = document.querySelector(".top-nav");

  function revealHeader() {
    if (!HEADER) return;

    if (window.scrollY > 40) {
      HEADER.classList.add("is-visible");
    } else {
      HEADER.classList.remove("is-visible");
    }
  }

  // Initial state
  revealHeader();

  // Scroll listener
  window.addEventListener("scroll", revealHeader, { passive: true });

  // Footer cross-domain label
  const link = document.querySelector(".footer-link a");
  if (link) {
    if (window.location.hostname.includes("cryptococktailclub.com")) {
      link.textContent = "Enter the Virtual Bar (.club)";
    } else {
      link.textContent = "View Litepaper (.com)";
    }
  }
})();
