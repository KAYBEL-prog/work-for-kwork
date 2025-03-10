
$(document).ready(function () {
  var savedSlideIndex = localStorage.getItem('activeSlide') ? parseInt(localStorage.getItem('activeSlide')) : 0;
  $('.slider_1').slick({
    initialSlide: savedSlideIndex,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
  });
  $('.custom-dots button').removeClass('custom-dots_active');
  $('.custom-dots button').eq(savedSlideIndex).addClass('custom-dots_active');
  $('.custom-dots button').on('click', function () {
    var slideIndex = $(this).data('slide');
    $('.slider_1').slick('slickGoTo', slideIndex);
  });
  $('.slider_1').on('afterChange', function (event, slick, currentSlide) {
    $('.custom-dots button').removeClass('custom-dots_active');
    $('.custom-dots button').eq(currentSlide).addClass('custom-dots_active');
    localStorage.setItem('activeSlide', currentSlide);
  });
});

$('.slider_2').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  prevArrow: '<button class="carousel-control-prev z-20 order-2 absolute right-0 bottom-0 mr-20 flex justify-center items-center w-16 h-16 rounded-full border border-black" type="button" data-bs-target="#specialistsCarousel" data-bs-slide="prev"><svg class="w-13 h-13 rotate-180" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H29" stroke="#494A4E" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 15L29 22L22 29" stroke="#494A4E" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow: '<button class="carousel-control-next z-20 order-3 absolute right-0 bottom-0 flex justify-center items-center w-16 h-16 rounded-full border border-black" type="button" data-bs-target="#specialistsCarousel" data-bs-slide="next"><svg class="w-13 h-13" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 22H29" stroke="#494A4E" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 15L29 22L22 29" stroke="#494A4E" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,

      }
    }
  ]
});
$('.slider_3').slick({
  slidesToShow: 7,
  slidesToScroll: 1,

  draggable: false,
  swipe: false,
  touchMove: false,
  accessibility: false,

  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1202,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 514,
      settings: {
        slidesToShow: 2,
      }
    },
  ]
});
$('.slider_4').slick({
  slidesToShow: 7,
  slidesToScroll: 1,

  draggable: false,
  swipe: false,
  touchMove: false,
  accessibility: false,

  arrows: false,
  dots: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 2000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1202,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 514,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
});