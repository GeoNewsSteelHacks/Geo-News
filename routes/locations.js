var express = require('express');
var router = express.Router();
// var webhose = require('webhose-nodejs');

var queryHandler = require('../helpers/newsQueries.js');
var queryTest = require('../helpers/newsQueriesTest.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var q = 'req.body.location';
    
    // var ops = {
    	// format: 'Enums.format.json',
    	// language: 'english',
    	// thread.country: 'US',
    	// site_type: 'news',
    	// size: 10,		// returns 10 stories
    	// location: req.body.location,
		// performance_score: >= 4,
		
    // };
    // try{
        // webhose.search(q, ops, function(err, whRes){
        	// if(err){
        		// console.log(err);
        		// throw webHoseRequestException(err);
        	// }
        	// res.json(whRes.data);
        // });
        
    // }catch(e){
        // console.log(e);
    // }
    unirest.get("https://webhose.io/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)")
	
		
.header("Accept", "text/plain")	
.end(function (result) {
	while (result.next){
		unirest.get(result.next);
	}
    console.log(result.status, result.headers, result.body);
});
	
    /*
    res.json({SanFran : { title : "News Story",
                          description : "There's News!",
                          siteURL : "https://www.google.com"
    }});
    */
});
 /*
router.get('/test', function(req, res, next){
    
    var ops = {
    	format: 'json',
    	language: 'english',
    	//thread.country: 'US',
    	site_type: 'news',
    	size: 10,		// returns 10 stories
    	location: 'pittsburgh'
    };
    
    webhose.search('pittsburgh', ops, function(err, whRes){
    	if(err){
    		console.log(err);
    		throw webHoseRequestException(err);
    	}
    	res.json(whRes.data);
    });
}); 

module.exports = router;

function webHoseRequestException(err){
	this.error = err;
} */