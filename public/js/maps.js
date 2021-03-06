var initialLocation;
var cities;
var cityCircle = new Array(35);
var index = 0;
var radius = 85000
var map = undefined
var geocoder;

var activeInfoBox;

function initialize() {

    // SET DEFAULT MAP OPTIONS
    var mapOptions = {
        center : {lat: 39.0997, lng : -94.5783},
        zoom: 5,
    }

    // CREATE THE MAP
    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    // DRAW THE CIRCLES FOR CITIES
    drawCircles();

    // LISTENER FOR ZOOM CHANGE
    google.maps.event.addDomListener(map, 'zoom_changed', function(f) {

        // SWITCH TO 'REGION VIEW' IF MAP ZOOM IS LOW
        if (map.getZoom() < 5) {

            for (var z in cityCircle) {
                cityCircle[z].setMap(null)
               
            }
            for (var r in cityCircle) {
                cityCircle[r].setVisible(false);

            }

            drawFusionLayer('187xl9kj6GDMkR3AEmhXtorHVZbcxJ6AiAikXx0eC');

        }
        else if (map.getZoom() >= 5) {
            
            for (var z in cityCircle) {

                cityCircle[z].setMap(null)

                }
            drawCircles();
        }
    });

}

// FUNCTION TO DRAW CIRCLES AROUND THE LOCATIONS
function drawCircles() {
    
    cities = cityCenters();
    var openInfoBox = false;
    
    // CREATE THE CIRCLES
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
            radius: radius,
            name: cities[city].name
            
        });

        // event handler for hover
        
        google.maps.event.addListener(cityCircle[index], 'mouseover', function(e) {
            if(openInfoBox == true){
                var id = $(openInfoBox.getContent()).attr('id');
                if ($('#' + id + ':hover').length) {
                    return false; 
                }
            }
            
            var infoWindow = new google.maps.InfoWindow({
                content: "<div><p>Click to see news from " + this.name + "</p></div>",
                maxWidth: 500
            });
            
            infoWindow.setPosition(e.latLng);
            activeInfoBox = infoWindow;
            activeInfoBox.open(map);
            openInfoBox = true;
        });
        google.maps.event.addListener(cityCircle[index], 'mouseout', function(e) {
                activeInfoBox.close(map);
                openInfoBox = false;
        });
            
        // event handler for click
        google.maps.event.addListener(cityCircle[index], 'click', function(t) {
            $("#panelHead").text(this.name);
            getCityStories(this.name);
        });
        index++;
    }

    


}

// FUNCITON TO CREATE THE 'REGION VIEW'
function drawFusionLayer(fusionTable) {
    
    var layer = new google.maps.FusionTablesLayer({
        query: {
            select: '\'geometry\'',
            from: fusionTable
        },
        styles: [{
            where: "'GEOID' = 7",
            polygonOptions: {
                fillColor: '#FF7F00'
            }
        },{
            where: "'GEOID' = 9",
            polygonOptions:{
                fillColor: '#4B0082'
            }
        },{
            where: "'GEOID' = 5",
            polygonOptions: {
                fillColor: '#FFFF00'
            }
        }, {
            where: "'GEOID' = 3",
            polygonOptions: {
                fillColor: '#00FF00'
            }
        }, {
            where: "'GEOID' = 4",
            polygonOptions: {
                fillColor: '#0000FF'
            }

        }],

        suppressInfoWindows : true
    });
    layer.setMap(map);
    currentOverlay = map;
    google.maps.event.addListener(map, 'zoom_changed', function() {
        if (map.getZoom() >= 5) {
            layer.setMap(null);
        }
    });
    google.maps.event.addListener(layer, 'click', function(z) {
        var geoID = z.row['GEOID'].value;   
        getRegionStories(geoID);
    });
}





google.maps.event.addDomListener(window, 'load', initialize);
