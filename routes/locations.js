var express = require('express');
var router = express.Router();
var unirest = require('unirest')

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var q = 'pittsburgh';
    var baseURL = "https://webhose.io";
    var request = unirest.get(baseURL + "/search?token=3903271a-d7b5-4221-90c7-bc68fc7d1cb2&format=json&q=" + q + "%20language%3A(english)%20thread.country%3AUS%20(site_type%3Anews)");
	// limit size, get most recent              // testing addition: '%20size%3A%3E10'
    request.header("Accept", "text/plain");	
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
    	
    	
    	
       // res.render('index');
    });
	
});

module.exports = router;