/* =====================================================
   CCC Litepaper — Header Reveal
   ===================================================== */

(function () {
  const header = document.querySelector(".top-nav");
  if (!header) return;

  function onScroll() {
    if (window.scrollY > 60) {
      header.classList.add("is-visible");
    } else {
      header.classList.remove("is-visible");
    }
  }

  // Run once on load
  onScroll();

  // Listen for scroll
  window.addEventListener("scroll", onScroll, { passive: true });
})();
