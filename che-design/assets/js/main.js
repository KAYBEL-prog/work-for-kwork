// смена свойст header при скролле  
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const headerNav = document.querySelector(".inner_header-nav");
  if (window.scrollY > 10) { // при прокрутке больше 50px
    header.classList.add("scrolled");
    headerNav.classList.add("mt-auto");
  } else {
    header.classList.remove("scrolled");
    headerNav.classList.remove("mt-auto");
  }
});
