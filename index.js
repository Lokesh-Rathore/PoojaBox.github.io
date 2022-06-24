$(".firstslider .main-corousel").flickity({
  cellAlign: "left",
  wrapAround: true,
  freeScroll: false,
  draggable: true
});
$(".secondslider .main-corousel").flickity({
  cellAlign: "left",
  wrapAround: true,
  freeScroll: false,
  draggable: true
});

var readbtn = $(".readmore");
var unreadbtn = $(".readless");
var changetxt = $(".changetxt");

function changeTxt() {
  changetxt.toggleClass("main");
}

var ftrul = $(".ftrul");

function showUl() {
  if (window.innerWidth < 650) {
    ftrul.toggleClass("ulDisplay");
  }
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

