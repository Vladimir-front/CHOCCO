$('.slider__list').slick({
  arrows: true,
  appendArrows: $('.slider__arrows'),
  prevArrow: $('.slider__link'),
  nextArrow: $('.slider__link')
  });


$('.review').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.review__list-bottom'
  });
  $('.review__list-bottom').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.review',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  });