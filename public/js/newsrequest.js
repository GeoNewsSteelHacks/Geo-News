function populateSidePannel(locationStories){
	for(var i = 0; i < locationStories.length; i++){
		var elementContainer = '<div>' 
			+ '<h1>' + locationStories[i].title + '</h1>'
			+ '<p>' + locationStories[i].description + '</p>' 
			+ '<a href=' + locationStories[i].url + '>'+ locationStories[i].url.toString() + '</>' + '</div>';
		$("#panel").append(elementContainer);
	}
}

function getRegionStories(regionNumber){
	$.get("/", {region:regionNumber}, function(response){
		clearSidePannel();
		populateSidePannel(reponse.name);
	})
}

function clearSidePannel(){
	$("#panel").html("");
}

function getLocationStories(locationName){
	$.get("/location", {location:locationName}, function(response){
		clearSidePannel();
		populateSidePannel(response.name);
	})
}