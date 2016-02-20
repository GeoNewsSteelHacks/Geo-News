function newsRequest(locationName){
	$.get("/location", {location:locationName}, function(data){
		for(var i = 0; i < data.length; i++){
			var elementContainer = '';
			elementContainer = elementContainer + '<div>' 
				+ '<h1>' + data[i].title + '</h1>'
				+ '<p>' + data[i].description + '</p>' 
				+ '<p>' + data[i].url + '</p>' + '</div>'
			}
	}


