var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({SanFran : { title : "News Story",
                          description : "There's News!",
                          siteURL : "https://www.google.com"
    }});
});

module.exports = router;
