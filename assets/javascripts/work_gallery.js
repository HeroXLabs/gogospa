window.WorkGallery = function() {
  function lightbox() {
    $(".cbox-gallary1").colorbox({
      rel: 'gallary',
      maxWidth: "95%",
      maxHeight: "95%"
    });
  };

  function containerGridMasonry() {
    // Gria Element
    if ($(this).length > 0) {
      // ISOTOPE MASONRY ELEMENT  ||--------------
      var $container = $('.container-masonry');
      $container.imagesLoaded(function () {
        $container.isotope({
          itemSelector: '.nf-item',
          layoutMode: 'masonry',
          masonry: {
            columnWidth: 0,
            gutter: 0
          },
        });
      });

      // bind filter button click
      $('.container-filter').on('click', '.categories', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
      });

      // ISOTOPE GRID ELEMENT  ||--------------
      var $container2 = $('.container-grid');
      $container2.imagesLoaded(function () {
        $container2.isotope({
          itemSelector: '.nf-item',
          layoutMode: 'fitRows'
        });
      });

      // bind filter categories click
      $('.container-filter').on('click', '.categories', function () {
        var filterValue = $(this).attr('data-filter');
        $container2.isotope({ filter: filterValue });
      });

      // change active class on categories
      $('.categories-filter').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', '.categories', function () {
          $buttonGroup.find('.active').removeClass('active');
          $(this).addClass('active');
        });

      });
    };

    // Masonry Element
    if ($(this).length > 0) {
      var container = $('.masonry');
      container.masonry({
        // columnWidth: 0,
        itemSelector: '.nf-item'
      });
    };
  };


  function setup() {
    containerGridMasonry();
    lightbox();
  }

  return {
    setup: setup
  }
}()


;
