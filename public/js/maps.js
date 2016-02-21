var initialLocation;
var cities;
var cityCircle = new Array(35);
var index = 0;
var radius = 85000
var bermudaTriangle;
var currentOverlay = null
var map = undefined

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
           $(document).ready(function(){

                $("#panel").text("Hello world!");

   
            });
        });
        
        
        index++;
    }
    
     var infoWindow = new google.maps.InfoWindow({
    
        content: "<div>Click to see news from this region!</div>",
        maxWidth: 500
    });


    google.maps.event.addDomListener(map, 'zoom_changed', function(f) {
      
        if (map.getZoom() < 5) {
            for(var r in cityCircle){
                cityCircle[r].setVisible(false)
            }
            var eastCoords = [
            {lat:35.0041, lng:-88.1955},
            {lat:34.9918, lng:-85.6068},
            {lat:32.8404, lng:-85.1756},
            {lat:32.2593, lng:-84.8927},
            ];
            bermudaTriangle = new google.maps.Polygon({
                paths: eastCoords,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });
            
            bermudaTriangle.setMap(map);


            
        }
        else if (map.getZoom() >= 5) {
            bermudaTriangle.setMap(null)
            for(var t in cityCircle){
                cityCircle[t].setVisible(true)
            }
           
            radius = 42500;
            for (var k in cityCircle) {
                cityCircle[k].setRadius(radius)
            }
        }
        
        

    });
}

      
    function drawFusionLayer(fusionTable){
        var layer = new google.maps.FusionTablesLayer({
            query: {
              select: '\'geometry\'',
              from: fusionTable
            },
            styles: [{ where: "'style' = 0",
                polygonOptions: {
                    fillColor: '#FF0000'
                }    
                },{ where: "'style' = 1",
                polygonOptions: {
                    fillColor: '#FF7F00'
                }    
                },{ where: "'style' = 2",
                polygonOptions: {
                    fillColor: '#FFFF00'
                }    
                },{ where: "'style' = 3",
                polygonOptions: {
                    fillColor: '#00FF00'
                }    
                },{ where: "'style' = 4",
                polygonOptions: {
                    fillColor: '#0000FF'
                }    
                },{ where: "'style' = 5",
                polygonOptions: {
                    fillColor: '#4B0082'
                }    
                }]
          });
        layer.setMap(map);
        currentOverlay = map;
    }  
    
    drawFusionLayer('1H1Ee3_2xX7wr25WNRWs3uXyGLzTtjxnDUUMrozWt');
    


google.maps.event.addDomListener(window, 'load', initialize);



