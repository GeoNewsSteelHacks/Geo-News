var express = require('express');
var router = express.Router();
var unirest = require('unirest');

//var regionDictionary = require('../helpers/getRegionQueryString.js');

/* GET home page. */
router.get('/city', function(req, res, next) {
    var q = req.query.location;
    var baseURL = "https://webhose.io";
    var request = unirest.get(baseURL + "/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)");
	// limit size, get most recent              // testing addition: '%20size%3A%3E10'
    request.header("Accept", "text/plain");
    try {
        request.end(function (result) {
            //console.log(result.body);
        	
        	request = unirest.get(baseURL + result.body.next);
        	request.header("Accept", "text/plain");
        	
        	request.end(function(result){
                var len = result.body.posts.length;
                var posts = [];
                for(var i=1; i<11; i++){
                    var temp = {};
                    temp.title = result.body.posts[len-i].title;
                    temp.url = result.body.posts[len-i].url;
                    posts.push(temp);
                    //console.log(result.body.posts[len-1]);
                }
                res.send(posts);
        	   // console.log(Object.getOwnPropertyNames(result.body))
        	});
        });
    }
    catch(e){
        console.log(e);
    }
});

function getRegionQueryString(regionID){
    var regionDictionary = {
        1 :  "Boston",
        2 : "(philadelphia OR pittsburgh OR new york)",
        3 : "(chicago OR detroit OR indianapolis OR cincinnati OR columbus)",
        4 : "(minneapolis OR kansas city)",
        5 : "(charlotte OR atlanta OR miami OR washington OR baltimore)",
        6 : "nashville",
        7 : "(oklahoma city OR dallas OR austin OR new orleans)",
        8 : "(salt lake city OR las vegas OR pheonix OR tueson OR albuquerque OR el paso OR denver",
        9 : "(seattle OR portland OR las angeles)"
    };
    return regionDictionary[regionID];
}


router.get('/region', function(req, res, next) {

    var q = getRegionQueryString(req.query.region);
    
    var baseURL = "https://webhose.io";
    var request = unirest.get(baseURL + "/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)");
	// limit size, get most recent              // testing addition: '%20size%3A%3E10'
    request.header("Accept", "text/plain");	
    request.end(function (result) {
        //console.log(result.body);
    	/*
    	request = unirest.get(baseURL + result.body.next);
    	request.header("Accept", "text/plain");
    	
    	request.end(function(result){*/
            var len = result.body.posts.length;
            var posts = [];
            for(var i=1; i<11; i++){
                var temp = {};
                temp.title = result.body.posts[len-i].title;
                temp.url = result.body.posts[len-i].url;
                posts.push(temp);
                //console.log(result.body.posts[len-1]);
            }
            res.send(posts);
    	   // console.log(Object.getOwnPropertyNames(result.body))
    	//});
    });
});

module.exports = router;