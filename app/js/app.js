const menu = document.getElementById("toggle-menu");

// menu.addEventListener("click", () => menu.classList.toggle("open"));

document.addEventListener("click", (e) => {
  if (e.target.id == "toggle-menu") {
    e.target.classList.toggle("open");
  }
  if (e.target.classList.contains("hamburger")) {
    return menu.classList.add("open");
  }
  if (
    e.target.classList.contains("header__nav") ||
    e.target.classList.contains("header__item") ||
    e.target.classList.contains("header__list")
  ) {
    return;
  }
  menu.classList.remove("open");
});
