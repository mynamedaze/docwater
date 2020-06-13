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
    responsive : {
      0: {
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
      },
      768: {
        items: 3,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
      }
    }
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
    responsive : {
      0: {
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false
      },
      768: {
        items: 3,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false
      }
    }
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
    responsive: {
      0: {
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 7000
      },
      768: {
        items: 1,
        loop: true,
        dots: false,
        nav: true,
        autoplay: false,
        autoplayTimeout: 7000
      }
    }
  });


  let offset = 250;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $('.back-to-top').fadeIn(300);
    } else {
      $('.back-to-top').fadeOut(300);
    }
  });
  $('.back-to-top').click(function (event) {
    event.preventDefault();
    $('html, body').animate({scrollTop: 100}, 300);
    return false;
  })

  let headBurger = document.getElementsByClassName('page-header__burger');
  let mainNav = document.getElementsByClassName('main-nav');
  $(headBurger).click(function (event) {
    event.preventDefault();
    $(mainNav).toggleClass('active');
    $(headBurger).toggleClass('active');
  });

  //utp-mobile-slider
  if (document.body.clientWidth < 768) {
    $('.utp__list').addClass('owl-carousel owl-theme');
    var utpSlider = $(".utp__list").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 7000
    });
  }

  $(window).resize(function() {
    if (document.body.clientWidth > 767 && utpSlider) {
      utpSlider.trigger('destroy.owl.carousel');
    } else if (document.body.clientWidth < 768) {
      utpSlider = $(".utp__list").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        dots: true,
        nav: false,
        autoplayTimeout: 7000
      });
    }
  });

  //family-mobile-slider
  if (document.body.clientWidth < 768) {
    $('.family__list').addClass('owl-carousel owl-theme');
    var familySlider = $(".family__list").owlCarousel({
      items: 1,
      loop: true,
      dots: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 7000
    });
  }

  $(window).resize(function() {
    if (document.body.clientWidth > 767 && familySlider) {
      familySlider.trigger('destroy.owl.carousel');
    } else if (document.body.clientWidth < 768) {
      familySlider = $(".family__list").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 7000
      });
    }
  });

});