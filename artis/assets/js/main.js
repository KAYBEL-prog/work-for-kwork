
// burger-menu 
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('closeBtn');

burger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});


// settings slider 
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 3 }
    }
  });
});

const slides = document.querySelectorAll('.portfolio__item');
let current = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

document.querySelectorAll('.next').forEach(btn => btn.addEventListener('click', () => {
  current = (current + 1) % slides.length;
  showSlide(current);
}));

document.querySelectorAll('.prev').forEach(btn => btn.addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}));