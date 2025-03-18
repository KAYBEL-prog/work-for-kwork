window.addEventListener('scroll', function () {
  let header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#151515';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

document.querySelector('#burgerMenuBtn').addEventListener('click', () => {
  document.querySelector('.burger-menu__line1').classList.toggle('active');
  document.querySelector('.burger-menu__line2').classList.toggle('d-none');
  document.querySelector('.burger-menu__line3').classList.toggle('active');
});
