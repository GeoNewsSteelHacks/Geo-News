var map;
var initialLocation;
function initialize() {

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
     });
    }

    var mapOptions = {
      zoom: 10,
    }
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  
}
google.maps.event.addDomListener(window, 'load', initialize);