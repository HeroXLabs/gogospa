window.ScrollToLinks = function($) {
  function setup() {
    $('a.scrollto').click(function(e) {
      $('html,body').scrollTo(this.hash, this.hash, { gap: { y: -70 } });
      e.preventDefault();

      if ($('.navbar-collapse').hasClass('in')){
        $('.navbar-collapse').removeClass('in').addClass('collapse');
      }
    });
  }

  return {
    setup: setup
  }
}(jQuery)
;
