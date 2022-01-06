const BOXMENUBURGER = document.querySelector(".box-picto-menu-burger");
const BOXCLOSE = document.querySelector(".box-picto-close");
const MENU = document.querySelector(".menu");
const LIENSMENU = document.querySelector(".liens-menu");

BOXMENUBURGER.addEventListener("click", () => {
  BOXMENUBURGER.classList.add("none");
  MENU.classList.remove("none");
  BOXCLOSE.classList.remove("none");
});

BOXCLOSE.addEventListener("click", () => {
  BOXMENUBURGER.classList.remove("none");
  MENU.classList.add("none");
  BOXCLOSE.classList.add("none");
});

MENU.addEventListener("click", () => {
  BOXMENUBURGER.classList.remove("none");
  MENU.classList.add("none");
  BOXCLOSE.classList.add("none");
});

LIENSMENU.addEventListener("click", () => {
  BOXMENUBURGER.classList.remove("none");
  MENU.classList.add("none");
  BOXCLOSE.classList.add("none");
});
