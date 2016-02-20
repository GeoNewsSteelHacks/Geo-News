var map;
var initialLocation;
var cities;
var cityCircle = new Array(35);
var index = 0;
var radius = 85000
var zoom;

function initialize() {

    // INIT BASED OFF LOCATION
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(initialLocation);
        });
    }

    var mapOptions = {
        zoom: 5,
    }

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    zoom = map.getZoom();
    // DRAW THE CIRCLES FOR CITIES
    
       
     cities= cityCenters();
    

    for (var city in cities) {
        // Add the circle for this city to the map.
        cityCircle[index] = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35,
            map: map,
            center: cities[city].center,
            radius: radius
        });
        // event handler for hover
        google.maps.event.addListener(cityCircle[index], 'mouseover', function(e) {
            infoWindow.setPosition(e.latLng);
            infoWindow.open(map);
        });
        google.maps.event.addListener(cityCircle[index], 'mouseout', function(e){
        
            infoWindow.close(map);
        });
        // event handler for click
        google.maps.event.addListener(cityCircle[index], 'click', function(t){
            
            // TODO
        });
        

        index++;
    }
    
     var infoWindow = new google.maps.InfoWindow({
    
        content: "<div>Click to see news from this region!</div>",
        maxWidth: 500
    });


    google.maps.event.addDomListener(map, 'zoom_changed', function(f) {

        if (zoom < 5) {
            radius = radius;
        }
        else if (map.getZoom() > zoom) {
            radius = radius / 2;
        }
        else if (map.getZoom() < zoom) {
            radius = radius * 2;
        }
        zoom = map.getZoom();
        for (var i in cityCircle) {
            cityCircle[i].setRadius(radius)
        }

    });
}
google.maps.event.addDomListener(window, 'load', initialize);
