// CCC Floating Header Scroll Controller
// Canonical behavior shared across .club, Litepaper, Whitepaper

(function () {
  const header = document.getElementById("topNav");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const SHOW_THRESHOLD = 40; // px before header is allowed to appear

  function onScroll() {
    const currentScrollY = window.scrollY;

    // Show header when scrolling up or near top
    if (currentScrollY < SHOW_THRESHOLD || currentScrollY < lastScrollY) {
      header.classList.add("header-visible");
    } else {
      // Hide header when scrolling down
      header.classList.remove("header-visible");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  // Initial state
  if (window.scrollY < SHOW_THRESHOLD) {
    header.classList.add("header-visible");
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();
