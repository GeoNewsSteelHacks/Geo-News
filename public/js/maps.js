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
   cities={

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
        },
        austin:{
            center:{lat: 30.2500, lng: -97.7500}
        },
        cincinnati:{
            center:{lat: 39.1000, lng: -84.5167}
        },
        stPaul:{
            center:{lat: 44.9442, lng: -93.0936}
        },
        indianapolis:{
            center:{lat: 39.7910, lng: -86.1480}
        },
        charlotte:{
            center:{lat: 35.2269, lng: -80.8433}
        },
        denver:{
            center:{lat: 39.7392, lng: -104.9903}
        },
        newark:{
            center:{lat: 40.7242, lng: -74.1726}
        },
        tucson:{
            center:{lat: 32.2217, lng: -110.9264}
        },
        elPaso:{
            center:{lat: 31.7903, lng: -106.4233}
        },
        miami:{
            center:{lat: 25.7753, lng: -80.2089}
        },
        newOrleans:{
            center:{lat: 29.9500, lng: -90.0667}
        },
        chicago:{
            center:{lat: 41.8369, lng: -87.6847}
        },
        phoenix:{
            center:{lat: 33.4500, lng: -112.0667} 
        },
        la:{
            center:{lat: 34.0500, lng: -118.2500}
        },
        seattle:{
            center:{lat: 47.6097, lng: -122.3331}
        },
        oklahoma:{
            center:{lat: 35.4822, lng: -97.5350}
        },
        philadelphia:{
            center:{lat: 39.9500, lng: -75.1667}
        },
        dallas:{
            center:{lat: 32.7767, lng: -96.7970}
        },
        columbus:{
            center:{lat: 39.9833, lng: -82.9833}
        },
        vegas:{
            center:{lat: 36.1215, lng: -115.1739}
        },
        albuquerque:{
            center:{lat: 35.1107, lng: -106.6100}
        },
        detroit:{
            center:{lat: 42.3314, lng: -83.0458}
        },
        saltLake:{
            center:{lat: 40.7500, lng: -111.8833}
        },
        portland:{
            center:{lat: 45.5200, lng: -122.6819}
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
                radius: 85000
              });
              if(map.getZoom() >11){
                  var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: cities['nyc'].center,
                radius: 850
                });
                var cityCircle = new google.maps.Circle({
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35,
                map: map,
                center: cities['newark'].center,
                radius: 850
                });
              }
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