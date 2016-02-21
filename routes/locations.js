var express = require('express');
var router = express.Router();
var webhose = require('webhose-nodejs');

var queryHandler = require('../helpers/newsQueries.js');
var queryTest = require('../helpers/newsQueriesTest.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var q = '';
    
    var ops = {
    	format: 'json',
    	language: 'english',
    	//thread.country: 'US',
    	site_type: 'news',
    	size: 10,		// returns 10 stories
    	location: req.body.location
    };
    try{
    webhose.search(q, ops, function(err, whRes){
    	if(err){
    		console.log(err);
    		throw webHoseRequestException(err);
    	}
    	res.json(whRes.data);
    });
        
    }catch(e){
        console.log(e);
    }
    
    /*
    res.json({SanFran : { title : "News Story",
                          description : "There's News!",
                          siteURL : "https://www.google.com"
    }});
    */
});

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
}