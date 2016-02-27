var express = require('express');
var router = express.Router();
var unirest = require('unirest');

//var regionDictionary = require('../helpers/getRegionQueryString.js');

/* GET home page. */
router.get('/city', function(req, res, next) {
    
    console.log("\nCity Request : " + req.query.location);
    
    
    var q = req.query.location;
    var baseURL = "https://webhose.io";
    
    var yesterdayTS = new Date().getTime() - 86400000;
    
    var request = unirest.get(baseURL + "/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)&ts=" + yesterdayTS);
    request.header("Accept", "text/plain");

    try {
        request.end(function (result) {
            var posts = packagePosts(result.body.posts);
            
            res.send(posts);
    	});
    }
    catch(e){
        console.log(e);
    }
});

router.get('/region', function(req, res, next) {
    
    console.log("\nRegion Request : " + req.query.region);

    var q = getRegionQueryString(req.query.region);
    
    var baseURL = "https://webhose.io";
    
    var yesterdayTS = new Date().getTime() - 86400000;
    
    var request = unirest.get(baseURL + "/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)&ts=" + yesterdayTS);
    request.header("Accept", "text/plain");
    
    try {
        request.end(function (result) {
            var posts = packagePosts(result.body.posts);
            
            res.send(posts);
        });
    }
    catch(e){
        console.log(e);
    }
});

function packagePosts(posts){
    var ret = [];
    for(var i = posts.length - 1; i > posts.length - 10; i--){
        var temp = {};
        temp.title = posts[i].title;
        temp.url = posts[i].url;
        ret.push(temp);
    }
    return ret;
}

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

module.exports = router;