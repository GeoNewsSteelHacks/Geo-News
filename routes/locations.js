var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/city', function(req, res, next) {

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
    };
    
    res.send(responseObject); // sending well formatted dummy for now
    
    
});

router.get('/region', function(req, res, next) {
    var responseObject = {
        name : [{
            title : "Story 1 region",
            description : "Story 1 desc",
            url : "Story 1 url"
        },{
            title : "Story 2 region",
            description : "Story 2 desc",
            url : "Story 2 url"
        }]
    };
    
    res.send(responseObject); // sending well formatted dummy for now
});

module.exports = router;