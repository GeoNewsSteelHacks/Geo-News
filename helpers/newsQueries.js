// generic queries for cities

var webhose = require('webhose-nodejs');



module.exports = function (city) {
	var q = city; //need to find good query terms
	
	var options = {
		format: 'json',
		language: 'english',
		//thread.country: 'US',
		site_type: 'news',
		size: 10,		// returns 10 stories
		location: city,
	};
	
	webhose.search(q, options, function(err, res) {
		if(err){
			return webHoseRequestException(err);
		}
		return res.data;
	});
};

function webHoseRequestException(err){
	this.error = err;
}