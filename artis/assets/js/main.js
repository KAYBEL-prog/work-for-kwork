
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

// 
$(document).ready(function () {
  $(".portfolio__slider ").owlCarousel({
    items: 1,
    dots: true,
    nav: false,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
  });
});


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




// modal form 

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('formModal');
  const openBtns = document.querySelectorAll('#openDemo');
  const closeBtn = document.getElementById('modalClose');
  const cancelBtn = document.getElementById('modalCancel');
  const form = document.getElementById('modalForm');
  const formError = document.getElementById('formError');

  function openModal() {
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    setTimeout(() => form.querySelector('#name').focus(), 50);
  }

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    formError.textContent = '';
    form.reset();
  }

  openBtns.forEach(btn => btn.addEventListener('click', openModal));
  closeBtn.addEventListener('click', closeModal);
  cancelBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal(); });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    formError.textContent = '';
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const agree = form.agree.checked;

    if (!name) { formError.textContent = 'Укажите имя'; form.name.focus(); return; }
    if (!phone) { formError.textContent = 'Укажите телефон'; form.phone.focus(); return; }
    if (phone.replace(/\D/g, '').length < 10) { formError.textContent = 'Неверный телефон'; form.phone.focus(); return; }
    if (!agree) { formError.textContent = 'Необходимо дать согласие на обработку персональных данных и политику обработки персональных данных'; return; }

    console.log({ name, phone, agree });
    formError.style.color = '#bfffc9';
    formError.textContent = 'Форма успешно отправлена!';
    setTimeout(closeModal, 900);
  });
});


const titles = document.querySelectorAll('.title__animation');
const titlesUp = document.querySelectorAll('.animation-in-up');
const titlesRight = document.querySelectorAll('.animation-in-right');

function checkVisibility() {
  // появление элемента при обноружении ( слево )
  titles.forEach(title => {
    if (!title.classList.contains('visible')) {
      const rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        title.classList.add('visible');
      }
    }
  });
  // появление элемента при обноружении ( справо )

  titlesRight.forEach(title => {
    if (!title.classList.contains('visible_animation-in-right')) {
      const rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        title.classList.add('visible_animation-in-right');
      }
    }
  });
  // появление элемента при обноружении ( вверх )
  titlesUp.forEach(title => {
    if (!title.classList.contains('visible_animation-in-up')) {
      const rect = title.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        title.classList.add('visible_animation-in-up');
      }
    }
  });


}
window.addEventListener('scroll', checkVisibility);
checkVisibility();

// анимация 
const easeOutCubic = p => 1 - Math.pow(1 - p, 3);

const animate = (el, end, duration) => {
  let start;
  const step = t => {
    if (!start) start = t;
    let p = Math.min((t - start) / duration, 1);
    el.textContent = Math.floor(easeOutCubic(p) * end);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
};

const observer = new IntersectionObserver((entries, obs) => {
  for (const e of entries) {
    if (e.isIntersecting) {
      const el = e.target;
      const end = parseInt(el.dataset.end) || 50;
      const dur = parseInt(el.dataset.duration) || 1000;
      animate(el, end, dur);
      obs.unobserve(el); // убрать, если нужен повторный запуск
    }
  }
}, { threshold: 0.5 });

// Подключаем все существующие счётчики
const attachAll = () => document.querySelectorAll('.counter').forEach(el => observer.observe(el));
attachAll();

// Удобная функция для добавления нового счётчика программно
window.addCounter = (end = 50, duration = 1000, parent = document.body) => {
  const el = document.createElement('div');
  el.className = 'counter';
  el.dataset.end = end;
  el.dataset.duration = duration;
  el.textContent = '0';
  parent.appendChild(el);
  observer.observe(el);
  return el;
};

// Пример: добавить новый счётчик через 1 секунду (удалите или измените по необходимости)
// setTimeout(() => window.addCounter(120, 800), 1000);