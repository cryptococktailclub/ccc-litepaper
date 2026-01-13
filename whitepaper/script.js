// CCC Floating Header Scroll Controller
// Canonical behavior shared across .club and .com

(function () {
  const header = document.getElementById("topNav");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;

  const SCROLL_HIDE_THRESHOLD = 80; // px before header can hide

  function onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > SCROLL_HIDE_THRESHOLD) {
      // Scrolling down
      header.classList.add("nav-hidden");
    } else {
      // Scrolling up
      header.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();
