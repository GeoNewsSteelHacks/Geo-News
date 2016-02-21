var express = require('express');
var router = express.Router();

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
    
    res.send(responseObject); // sending well formatted dummy for now
    
    
});

module.exports = router;