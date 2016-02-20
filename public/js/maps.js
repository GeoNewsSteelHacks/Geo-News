function initialize() {
    var geocoder = new google.maps.Geocoder();
    var address = "pittsburgh";
    
    geocoder.geocode( { 'address': address}, function(results, status) {
    
    if (status == google.maps.GeocoderStatus.OK) {
        var latitude = results[0].geometry.location.latitude;
        var longitude = results[0].geometry.location.longitude;
        alert(latitude);
        } 
    });
    var mapProp = {
        center:new google.maps.LatLng(40.440625,-79.995886),
        zoom:10,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);