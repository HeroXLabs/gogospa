window.MultiGalleries = function() {
  function setup() {
    $('.item1-carousel').owlCarousel({
      autoPlay: false,
      autoHeight: true,
      stopOnHover: true,
      singleItem: true,
      slideSpeed: 350,
      pagination: true,  // Show pagination buttons
      navigation: true,  // Show next and prev buttons
      navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      responsive: true
    });
  }

  return {
    setup: setup
  }
}()
;
