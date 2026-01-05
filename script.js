/* =====================================================
   CCC Litepaper — Header Reveal (Fixed)
   ===================================================== */

(function () {
  const header = document.querySelector(".top-nav");
  if (!header) return;

  function revealHeader(force = false) {
    if (force || window.scrollY > 40) {
      header.classList.add("is-visible");
    } else {
      header.classList.remove("is-visible");
    }
  }

  /* Reveal after first paint (matches .club) */
  window.addEventListener("load", () => {
    revealHeader(true);
  });

  /* Scroll behavior */
  window.addEventListener("scroll", () => {
    revealHeader(false);
  }, { passive: true });
})();
