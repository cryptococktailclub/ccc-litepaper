/* =====================================================
   CCC Litepaper — Header Reveal
   ===================================================== */

(function () {
  const header = document.querySelector(".top-nav");
  if (!header) return;

  function revealHeader() {
    if (window.scrollY > 60) {
      header.classList.add("is-visible");
    } else {
      header.classList.remove("is-visible");
    }
  }

  // Run once after paint
  window.addEventListener("load", revealHeader);

  // Run on scroll
  window.addEventListener("scroll", revealHeader, { passive: true });
})();
