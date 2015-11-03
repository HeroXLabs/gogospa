window.HomeIntro = function() {
  var $mainNavEle   = $('.x-main-nav');
  var homeStartHeight = $(window).height() + 50;

  function parallax() {
    $('.parallax').each(function () {
      var $el = $(this);
      $(window).scroll(function () {
        parallax($el);
      });
      parallax($el);
    });

    function parallax($el) {
      var diff_s = $(window).scrollTop();
      var parallax_height = $('.parallax').height();
      var yPos_p = (diff_s * 0.5);
      var yPos_m = -(diff_s * 0.5);
      var diff_h = diff_s / parallax_height;

      if ($('.parallax').hasClass('parallax-section1')) {
        $el.css('top', yPos_p);
      }
      if ($('.parallax').hasClass('parallax-section2')) {
        $el.css('top', yPos_m);
      }
      if ($('.parallax').hasClass('parallax-static')) {
        $el.css('top', (diff_s * 1));
      }
      if ($('.parallax').hasClass('parallax-opacity')) {
        $el.css('opacity', (1 - diff_h * 1));
      }

      if ($('.parallax').hasClass('parallax-background1')) {
        $el.css("background-position", 'left' + " " + yPos_p + "px");
      }
      if ($('.parallax').hasClass('parallax-background2')) {
        $el.css("background-position", 'left' + " " + -yPos_p + "px");

      }
    };

    //Parallax plugin Js Function element
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 500
    })
  }

  function mainNavScroll() {
    function scroll() {
      if ( $(window).scrollTop() < 1) {
        $mainNavEle.removeClass('scrolled');
      } else{
        $mainNavEle.addClass('scrolled');
      }
    }

    scroll();
    $(window).scroll(function() {
      scroll();
    });
  }

  function fullScreenSlider() {
    if ($('.fullscreen-carousel').length > 0) {

      $('.fullscreen-carousel').flexslider({
        animation: "slide",
        //  startAt: 0,
        animationSpeed: 700,
        animationLoop: true,
        slideshow: true,
        easing: "swing",
        controlNav: false,
        before: function (slider) {
          //   $('.fullscreen-carousel .overlay-hero .caption-hero').fadeOut();
          $('.fullscreen-carousel .overlay-hero .caption-hero').fadeOut().animate({ top: '80px' }, { queue: false, easing: 'easeOutQuad', duration: 700 });
          slider.slides.eq(slider.currentSlide).delay(400);
          slider.slides.eq(slider.animatingTo).delay(400);
        },
        after: function (slider) {
          //$('.fullscreen-carousel .flex-active-slide').find('.caption-hero').delay().fadeIn(1500);
          $('.fullscreen-carousel .flex-active-slide').find('.caption-hero').fadeIn(2000).animate({ top: '0' }, { queue: false, easing: 'easeOutQuad', duration: 1200 });
          BackgroundCheck.refresh();
        },
        start: function (slider) {
          $('body').removeClass('loading');
          BackgroundCheck.init({
            targets: '.full-intro',
            images: '.flexslider li img',
          });
        },
        useCSS: true,
      });
    };
    fullScreenCarousel();
    function fullScreenCarousel() {
      var windowWidth = $(window).width();
      var windowHeight = $(window).height();

      if ($(window).width() > 767) {
        $('.hero-slider-1 .slides li').css("height", windowHeight);
      }
      else {
        $('.hero-slider-1 .slides li').css("height", '400px');
      }

    };
    $(window).resize(function () {
      fullScreenCarousel();
    });
  };

  function setup() {
    mainNavScroll();
    fullScreenSlider();
    parallax();
  }

  return {
    setup: setup
  }
}()

;
