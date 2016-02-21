var express = require('express');
var router = express.Router();
var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
    
    // dummy response for now
    
    // Will use Justin's function to handle WebHose queries
    
    // Something like:
    
    /*
    
    var webHose = require('Justin's js file');
    
    res.json(webHose(req.locationName);
    
    Will send back object similar to dummy below.
    
    
    Expect response object to be of the form: 
    
    response object = {
        'LOCATION NAME' : [{
            title : "Story 1",
            description : "Story 1 desc",
            url : "Story 1 url"
        },{
            title : "Story 2",
            description : "Story 2 desc",
            url : "Story 2 url"
        }, etc. etc.]
    }
    */

    var responseObject = {
        name : [{
            title : "Story 1",
            description : "Story 1 desc",
            url : "Story 1 url"
        },{
            title : "Story 2",
            description : "Story 2 desc",
            url : "Story 2 url"
        }]
    }
    // *** OLD DUMMY OUTPUT ***
   // res.send(responseObject); // sending well formatted dummy for now
    
    // Justin's api query function
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
   var request = unirest.get("https://webhose.io/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)")
	
		
    request.header("Accept", "text/plain")	
    request.end(function (result) {
    	while (result.next){
	    	unirest.get(result.next);
	    }
        res.send(result.status, result.headers, result.body);
    });
	
});
    
});

module.exports = router;