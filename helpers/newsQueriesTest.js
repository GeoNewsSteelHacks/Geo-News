var webhose = require('webhose-nodejs');

//test //
function queryTest(){
	var ops = {
		format: 'json',
		language: 'english',
		//thread.country: 'US',
		site_type: 'news',
		size: 10,		// returns 10 stories
		location: 'pittsburgh'
	};
	
	webhose.search('pittsburgh', ops, function(err, res){
		if(err){
			console.log(err);
			return webHoseRequestException(err);
		}
		var returnObject = {'test' : 'ests'}; //res.data;
		console.log(returnObject);
		//console.log(res.data);
		//return returnObject;
	//	console.log(res.data);
	return returnObject;
	});
}

// end test//

function webHoseRequestException(err){
	this.error = err;
}



module.exports = queryTest;