const buttons = document.querySelectorAll(".mode-btn");
const body = document.body;

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    body.classList.remove("theme-base", "theme-gold", "theme-platinum");
    body.classList.add(`theme-${btn.dataset.theme}`);
  });
});
