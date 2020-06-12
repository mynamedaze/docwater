$(document).ready(function () {
  $(".intro__slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000
  });

  $(".othervid__slider").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    autoplay: false,
  });

  $(".doctors__slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000
  });

  $(".clients__slider").owlCarousel({
    items: 3,
    loop: true,
    dots: false,
    nav: true,
    autoplay: false,
  });

  let clientsFeedbackList = document.getElementsByClassName('clients__feedback-item');
  clientsFeedbackList = Array.prototype.slice.call(clientsFeedbackList);
  $(clientsFeedbackList).addClass('disable');
  $(clientsFeedbackList[1]).removeClass('disable');
  let slideCount = 1;

  $('.clients__slider  .owl-next').click(function() {
    $(clientsFeedbackList).addClass('disable');
    slideCount = slideCount + 1;
    $(clientsFeedbackList[slideCount]).removeClass('disable');
    if (slideCount >= clientsFeedbackList.length) {
      $(clientsFeedbackList).addClass('disable');
      slideCount = 0;
      $(clientsFeedbackList[slideCount]).removeClass('disable');
    }
  });

  $('.clients__slider  .owl-prev').click(function() {
    $(clientsFeedbackList).addClass('disable');
    slideCount = slideCount - 1;
    $(clientsFeedbackList[slideCount]).removeClass('disable');
    if (slideCount < 0) {
      $(clientsFeedbackList).addClass('disable');
      slideCount = clientsFeedbackList.length-1;
      $(clientsFeedbackList[slideCount]).removeClass('disable');
    }
  });

  $(".feedback__slider").owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true,
    autoplay: false,
    autoplayTimeout: 7000
  });
});