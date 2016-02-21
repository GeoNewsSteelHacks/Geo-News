function populateSidePannel(locationStories){
	for(var i = 0; i < locationStories.length; i++){
		var elementContainer = "<div class='storybox'>"
			+ "<a href=" + locationStories[i].url + " target='blank'>" + locationStories[i].title + "</a>";
			//+ '<p>' + locationStories[i].description + '</p>' 
			//+ '<a href=' + locationStories[i].url + '>Click here for more!</>' + '</div>';
		$("#panel").append(elementContainer);
	}
}

function clearSidePannel(){
	$("#panel").html("");
}

function getRegionStories(regionID){
	clearSidePannel();
	$('#panelHead').text('Regional Stories : Region ' + regionID);
	$('#panel').text('loading...');
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
	clearSidePannel();
	$('#panel').text('loading...');
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