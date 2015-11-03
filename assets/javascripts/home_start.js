window.HomeStart = function($) {
  var $homeStartEle = $('.x-home-start');
  var $mainNavEle   = $('.x-main-nav');
  var bgAssetPath   = 'assets/images/bg2.jpg';
  var homeStartHeight = $(window).height() + 50;

  function mainNavScroll() {
    function scroll() {
      if ( $(window).scrollTop() < homeStartHeight - 100) {
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

  function imageBackstretch() {
    $homeStartEle.height(homeStartHeight);
    $.backstretch(bgAssetPath);

    $(window).scroll( function() {
      var st = $(this).scrollTop(),
        wh = $(window).height(),
        sf = 1.2 - st/(10*wh);

      $backstretch = $('.backstretch');
      $backstretch.find('img').css({
        'transform' : 'scale('+sf+')',
        '-webkit-transform' : 'scale('+sf+')'
      });

      $homeStartEle.find('.container').css({
        'opacity' : (1.4 - st/400)
      });

      if ($(window).scrollTop() > homeStartHeight) {
        $backstretch.hide();
      } else {
        $backstretch.show();
      }
    });
  }

  function setup() {
    imageBackstretch();
    mainNavScroll();
  }

  return {
    setup: setup
  }
}(jQuery)

;
