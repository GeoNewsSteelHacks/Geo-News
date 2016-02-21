function newsRequest(locationName){
	$.get("/location", {location:locationName}, function(data){
		//alert(data.name);
		for(var i = 0; i < data.name.length; i++){
			var elementContainer = '<div>' 
				+ '<h1>' + data.name[i].title + '</h1>'
				+ '<p>' + data[i].description + '</p>' 
				+ '<a href='> + data[i].url + <'/>' + '</div>';
			alert(elementContainer);
			$("#panel").append(elementContainer);
		};
	});
}

