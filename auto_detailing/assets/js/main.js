window.addEventListener('scroll', function () {
  let header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#151515';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});