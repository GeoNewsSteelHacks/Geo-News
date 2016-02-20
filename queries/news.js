// generic queries for cities

var webhose = require('webhose-nodejs');



module.exports = function (city) {
	var q = city; //need to find good query terms
	
	var options = {
	format: 'json',
	language: 'english',
	thread.country: 'US',
	site_type: 'news',
	size: 10,		// returns 10 stories
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

//test //

var ops = {
	format: 'json',
	language: 'english',
	thread.country: 'US',
	site_type: 'news',
	size: 10,		// returns 10 stories
	location: 'pittsburgh'
}

try{
	webhose.search('pittsburgh', ops, function(err, res) ){
		console.log res.data;
	}
} catch (ex) {
	console.log(ex);
	break;
}

// end test//