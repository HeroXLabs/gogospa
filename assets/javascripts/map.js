window.MapLoader = function() {
  function setup(eId) {
    if ($('#' + eId).length) {
      var map;
      var mapstyles   = [ { "stylers": [ { "saturation": -100 } ] } ];
      var infoWindow  = new google.maps.InfoWindow;
      var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

      var mapOptions = {
        zoom: mapPoint.zoom,
        center: pointLatLng,
        zoomControl : true,
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false,
        scrollwheel: false,
        styles: mapstyles
      }

      map = new google.maps.Map(document.getElementById(eId), mapOptions);

      var marker = new google.maps.Marker({
        position: pointLatLng,
        map: map,
        title:mapPoint.linkText,
        icon: mapPoint.icon
      });

      var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;

      var html = '<div class="infowin">'
        + mapPoint.infoText
        + '<a href="'+mapLink+'" target="_blank">'+mapPoint.linkText+'</a>'
        + '</div>';

      google.maps.event.addListener(marker, 'mouseover', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });

      google.maps.event.addListener(marker, 'click', function() {
        window.open(mapLink,'_blank');
      });
    }
  }

  return {
    setup: setup
  }
}()

;
