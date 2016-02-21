function populateSidePannel(locationStories){
	for(var i = 0; i < locationStories.length; i++){
		var elementContainer = '<div class="storybox">' 
			+ '<h4 style="margin-top: 0; margin-bottom: 1; padding:0;">' + locationStories[i].title + '</h4>'
			//+ '<p>' + locationStories[i].description + '</p>' 
			+ '<a href=' + locationStories[i].url + '>Click here for more!</>' + '</div>';
		$("#panel").append(elementContainer);
	}
}

function clearSidePannel(){
	$("#panel").html("");
}

function getRegionStories(regionID){
	$.ajax({
    type: 'GET',
    url: '/location/region',
    data: {
    	region : regionID},
    success: function(data) {
	        clearSidePannel();
	        populateSidePannel(data);
	    }
	});
}

function getCityStories(locationName){
	$.ajax({
    type: 'GET',
    url: '/location/city',
    data: {
    	location : locationName},
    success: function(data) {
	        clearSidePannel();
	        populateSidePannel(data);
	    }
	});
}