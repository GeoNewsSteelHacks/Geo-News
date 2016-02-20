var map;
var initialLocation;
var cities;

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
   cities= cityCenters();
    
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
                radius: 85000
              });
              google.maps.event.addListener(cityCircle, 'mouseover', function(e) {
            
            infoWindow.setPosition(e.latLng);
            infoWindow.open(map);
        });
    }

    var infoWindow = new google.maps.InfoWindow({
        
        content: "<div>Click to see news from this region!</div>",
        maxWidth: 500
    });
    
    
}
google.maps.event.addDomListener(window, 'load', initialize);

//calculates distance between two points in km's
function calcDistance(p1, p2){
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}

function findAdjCities(){
    
    var allCitiesString = "pittsburgh | new york city | boston | washington dc | baltimore"
    
    for(var city in cities){
        var origin = cities[city],
        destination = allCitiesString,
        service = new google.maps.DistanceMatrixService();
    }
    
    service.getDistanceMatrix(
    {
        origins: [origin],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING,
        avoidHighways: false,
        avoidTolls: false
    },
    callback
    );
    
    
    
    
}


function callback(response, status) {
  if (status == google.maps.DistanceMatrixStatus.OK) {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        if(distance >= 190){
            alert(element);
        }
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
}