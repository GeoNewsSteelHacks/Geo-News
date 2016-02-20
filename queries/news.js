// generic queries for cities

var webhose = require('webhose-nodejs');



function getNews(city) {
	var q = 'Insert query here'; //need to find good query terms
	
	var options = {
	format: 'json',
	language: 'english',
	site_type: 'news',
	location: city,
	}
	
	try {
		webhose.search(q, options, function(err, res) ){
			return res.data;
		}
	}
	catch (ex) {
		console.log(ex);
		break;
	}
}

