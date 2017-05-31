(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    Materialize.updateTextFields();
    // $('#textarea').val('New Text');
    $('#textarea').trigger('autoresize');

  }); // end of document ready
})(jQuery); // end of jQuery name space

function initMap() {
  var urruna = {lat: 43.362, lng: -1.700};
  var donibane = {lat: 43.388, lng: -1.663};
  var askain = {lat: 43.345, lng: -1.621};
  var zentroa = {lat: 43.360, lng: -1.655};
  var hegoLapurdi = {
    center: zentroa,
    size: 9500
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: otro
    // mapTypeId: 'terrain'
  });
  var marker = new google.maps.Marker({
    position: urruna,
    animation: google.maps.Animation.BOUNCE,
    map: map,
    scaleControl: false,
    streetViewControl: false,
    fullscreenControl: false
  });
  // Add the circle for this city to the map.
  var cityCircle = new google.maps.Circle({
    strokeColor: '#ffffff',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.2,
    map: map,
    center: hegoLapurdi.center,
    radius: hegoLapurdi.size
  });
}

// Donibane-Lohitzune
// data=!3m1!4b1!4m5!3m4!1s0xd51117e6a0092db:0x406651748139250!8m2!3d43.388051!4d-1.663055
