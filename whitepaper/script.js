(function () {
  const header = document.getElementById("topNav");
  if (!header) return;

  let lastScrollY = window.scrollY;
  let ticking = false;
  const SCROLL_HIDE_THRESHOLD = 80;

  function onScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > SCROLL_HIDE_THRESHOLD) {
      header.classList.add("nav-hidden");
    } else {
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
