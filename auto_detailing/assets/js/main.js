window.addEventListener('scroll', function () {
  let header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.backgroundColor = '#151515';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

document.querySelector('#burgerMenuBtn').addEventListener('click', () => {
  if (document.querySelector('.burger__menu-icon-1').classList.contains('d-block')) {
    document.querySelector('.burger__menu-icon-1').classList.add('d-none');
    document.querySelector('.burger__menu-icon-1').classList.remove('d-block');
    document.querySelector('.burger__menu-icon-2').classList.remove('d-none');
    document.querySelector('.burger__menu-icon-2').classList.add('d-block');
  } else {
    document.querySelector('.burger__menu-icon-2').classList.add('d-none');
    document.querySelector('.burger__menu-icon-2').classList.remove('d-block');
    document.querySelector('.burger__menu-icon-1').classList.remove('d-none');
    document.querySelector('.burger__menu-icon-1').classList.add('d-block');
  }
});
