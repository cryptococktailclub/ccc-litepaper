// =====================================================
// CCC Floating Header Scroll Controller
// Canonical behavior for Litepaper & Whitepaper
// =====================================================

(function () {
  const header = document.getElementById("topNav");
  if (!header) return;

  let lastScrollY = window.scrollY;
  const HIDE_THRESHOLD = 80; // px

  // Ensure header is visible on initial load
  window.requestAnimationFrame(() => {
    header.classList.add("header-visible");
  });

  function onScroll() {
    const currentScrollY = window.scrollY;

    // Scrolling down past threshold → hide
    if (currentScrollY > lastScrollY && currentScrollY > HIDE_THRESHOLD) {
      header.classList.remove("header-visible");
    } 
    // Scrolling up → show
    else {
      header.classList.add("header-visible");
    }

    lastScrollY = currentScrollY;
  }

  // Passive scroll for performance
  window.addEventListener("scroll", onScroll, { passive: true });
})();
