
let scrolled = false;
const block = document.getElementById('header-block');

window.addEventListener('scroll', () => {
  if (!scrolled && window.scrollY > 0) {
    block.classList.add('scrolled');
    scrolled = true;
  }
  if (scrolled && window.scrollY === 0) {
    block.classList.remove('scrolled');
    scrolled = false;
  }
});
