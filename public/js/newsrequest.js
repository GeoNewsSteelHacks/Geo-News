function newsRequest(locationName){
	$.get("/location", {location:locationName}, function(data){
		for(var i = 0; i < data.name.length; i++){
			var elementContainer = '<div>' 
				+ '<h1>' + data.name[i].title + '</h1>'
				+ '<p>' + data.name[i].description + '</p>' 
				+ '<a href=' + data.name[i].url + '>' + '</>' + '</div>';
			$("#panel").append(elementContainer);
		}
	});
}