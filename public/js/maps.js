var map;
var initialLocation;
function initialize() {

    // INIT BASED OFF LOCATION
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        map.setCenter(initialLocation);
     });
    }

    var mapOptions = {
      zoom: 5,
    }
    
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    
    // DRAW THE CIRCLES FOR CITIES
    var cities={

    pittsburgh:{
        center:{lat: 40.4397, lng: -79.9764},
    },
    newYorkCity:{
        center:{lat: 40.7127, lng: -74.0059}
    },
    boston:{
        center:{lat: 42.3601, lng: -71.0589}
    },
    dc:{
        center:{lat: 38.9047, lng: -77.0164}
    },
    baltimore:{
        center:{lat: 39.2833, lng: -76.6167}
    },
    atlanta:{
        center:{lat: 33.7550, lng: -84.3900}
    },
    kansasCity:{
        center:{lat: 39.0997, lng: -94.5783}
    }
    
    
    };
    
    for (var city in cities) {
              // Add the circle for this city to the map.
              var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: cities[city].center,
                radius: 100000
              });
    }

    
}
google.maps.event.addDomListener(window, 'load', initialize);


