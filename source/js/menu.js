const mainNav = document.querySelector(".main-nav");
const mainNavToggle = document.querySelector(".main-nav__toggle");

mainNav.classList.remove("main-nav--nojs");

if (document.documentElement.clientWidth < 768 - getScrollbarWidth()) {
  mainNav.classList.add("main-nav--closed");
}

window.addEventListener("resize", function () {
  if (document.documentElement.clientWidth < 768 - getScrollbarWidth()) {
    mainNav.classList.add("main-nav--closed");

    if (mainNavToggle.classList.contains("main-nav__toggle--opened")) {
      mainNavToggle.classList.remove("main-nav__toggle--opened");
    }
  } else {
    mainNav.classList.remove("main-nav--closed");
  }
});

mainNavToggle.addEventListener("click", function () {
  mainNav.classList.toggle("main-nav--closed");
  mainNavToggle.classList.toggle("main-nav__toggle--opened");
});
