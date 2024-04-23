let menuIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".mega-menu .close-icon");
let megaMenu = document.querySelector(".mega-menu");
let links = document.querySelectorAll(".mega-links li a");

menuIcon.addEventListener("click", () => {
  megaMenu.classList.add("open");
});
closeIcon.addEventListener("click", () => {
  megaMenu.classList.remove("open");
});
links.forEach((link) => {
  link.addEventListener("click", () => {
    megaMenu.classList.remove("open");
  });
});
