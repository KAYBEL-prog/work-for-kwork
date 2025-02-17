window.addEventListener('scroll', function () {
  let header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('bg-black');
  } else {
    header.classList.remove('bg-black');
  }
});