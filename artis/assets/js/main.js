
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

// portfolio-slider
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

// accordion-header

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');

    document.querySelectorAll('.accordion-header, .accordion-content').forEach(el => el.classList.remove('active'));

    if (!isActive) {
      header.classList.add('active');
      content.classList.add('active');
    }
  });
});

// 

// утилиты
const toggles = Array.from(document.querySelectorAll('.toggle'));
function formatNum(n) {
  const sign = n < 0 ? '-' : '';
  const num = Math.abs(Math.round(n));
  return sign + String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// пересчёт итогов
function recalc() {
  let total = 0;
  toggles.forEach(t => {
    const price = Number(t.dataset.price) || 0;
    if (t.classList.contains('checked')) total += price;
  });
  const totalClamped = Math.max(0, Math.round(total));
  const apt = Number(document.getElementById('apt').value) || 0;
  const perM2 = apt > 0 ? Math.round(totalClamped / apt) : 0;
  document.getElementById('total').textContent = formatNum(totalClamped) + '₽';
  document.getElementById('perm').textContent = apt > 0 ? '(' + formatNum(perM2) + '₽ / м²)' : '(— / м²)';
}

// переключатели (визуал + recalc)
toggles.forEach(t => {
  t.addEventListener('click', () => {
    t.classList.toggle('checked');
    recalc();
  });
});

// подгон ширины input под количество цифр
function adjustWidth(input) {
  const v = String(input.value || input.placeholder || '0');
  const chars = v.split('').filter(function (c) { return c >= '0' && c <= '9'; });
  const digits = chars.length || 1;
  const widthCh = Math.min(8, digits + 1);
}

// подсветка зеленым (wrapper .number-input)
function updateFilled(id) {
  const input = document.getElementById(id);
  const wrap = document.getElementById('wrap-' + id);
  if (!input || !wrap) return;
  if (Number(input.value) > 0) wrap.classList.add('filled'); else wrap.classList.remove('filled');
}

// + / - behavior
document.querySelectorAll('.increment').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    const input = document.getElementById(id);
    const step = Number(input.step) || 1;
    input.value = Math.max(0, Number(input.value || 0) + step);
    adjustWidth(input);
    updateFilled(id);
    recalc();
  });
});

document.querySelectorAll('.decrement').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.target;
    const input = document.getElementById(id);
    const step = Number(input.step) || 1;
    input.value = Math.max(0, Number(input.value || 0) - step);
    adjustWidth(input);
    updateFilled(id);
    recalc();
  });
});

// прямой ввод в поле
document.querySelectorAll('.number-input input').forEach(inp => {
  inp.addEventListener('input', () => {
    if (inp.value === '') return;
    if (Number(inp.value) < 0) inp.value = 0;
    adjustWidth(inp);
    updateFilled(inp.id);
    recalc();
  });
  // initial
  adjustWidth(inp);
  updateFilled(inp.id);
});

// старт
recalc();