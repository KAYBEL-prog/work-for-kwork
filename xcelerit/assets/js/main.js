// btn swiper
let bgSwipe = document.querySelector('#bgSwipe');
document.querySelector('#filterSwipeLeft').addEventListener('click', () => {
  bgSwipe.classList.remove("ml-1/2");

  document.querySelector('#filterSwipeLeft').classList.add('text-black');
  document.querySelector('#filterSwipeLeft').classList.remove('text-white');

  document.querySelector('#filterSwipeRight').classList.remove('text-black');
  document.querySelector('#filterSwipeRight').classList.add('text-white');


  document.querySelector('#filterSwipeLeft_dropdown').classList.remove('hidden');
  document.querySelector('#filterSwipeRight_dropdown').classList.add('hidden');
});
document.querySelector('#filterSwipeRight').addEventListener('click', () => {
  bgSwipe.classList.add("ml-1/2");

  document.querySelector('#filterSwipeLeft').classList.remove('text-black');
  document.querySelector('#filterSwipeLeft').classList.add('text-white');

  document.querySelector('#filterSwipeRight').classList.add('text-black');
  document.querySelector('#filterSwipeRight').classList.remove('text-white');


  document.querySelector('#filterSwipeRight_dropdown').classList.remove('hidden');
  document.querySelector('#filterSwipeLeft_dropdown').classList.add('hidden');
});

// dropdown btn
document.getElementById('dropdownButton').addEventListener('click', () => {
  document.getElementById('dropdownMenu').classList.toggle('hidden');
});
window.addEventListener('click', (event) => {
  if (!event.target.document.getElementById('dropdownButton')) {
    document.getElementById('dropdownMenu').classList.add('hidden');
  }
});
// dropdown btn
document.getElementById('dropdownButton2').addEventListener('click', () => {
  document.getElementById('dropdownMenu2').classList.toggle('hidden');
});
window.addEventListener('click', (event) => {
  if (!event.target.document.getElementById('dropdownButton2')) {
    document.getElementById('dropdownMenu2').classList.add('hidden');
  }
});
