
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