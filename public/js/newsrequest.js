function populateSidePannel(locationStories){
	for(var i = 0; i < locationStories.length; i++){
		var elementContainer = '<div class="storybox">' 
			+ '<h1 style="margin-top: 0; margin-bottom: 1; padding:0;">' + locationStories[i].title + '</h1>'
			+ '<p>' + locationStories[i].description + '</p>' 
			+ '<a href=' + locationStories[i].url + '>'+ locationStories[i].url.toString() + '</>' + '</div>';
		$("#panel").append(elementContainer);
	}
}

function clearSidePannel(){
	$("#panel").html("");
}

function getRegionStores(regionID){
	$.get("/location/region", {region:regionID}, function(response){
		clearSidePannel();
		populateSidePannel(response.name);
	});
}

function getCityStories(locationName){
	$.get("/location", {location:locationName}, function(response){
		clearSidePannel(); 
		populateSidePannel(response.name);
	});
}