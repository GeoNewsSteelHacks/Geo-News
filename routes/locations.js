var express = require('express');
var router = express.Router();
var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var q = 'pittsburgh';
    var baseURL = "https://webhose.io";
    var request = unirest.get(baseURL + "/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)");
	
    request.header("Accept", "text/plain");	
    request.end(function (result) {
        console.log(result.body);
    	
    	request = unirest.get(baseURL + result.body.next);
    	request.header("Accept", "text/plain");
    	
    	request.end(function(result){
    	    console.log(result.body);
    	});
    	
    	
    	
        res.render('index');
    });
	
});

module.exports = router;