var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var routes = require('./routes/index');
var locations = require('./routes/locations');

var app = express();
// Justin's api query test!
app.get('/', function(req, res){
  var webhose = require('webhose-nodejs');
  
    var ops = {
  	format: 'json',
  	language: 'english',
  	thread.country: 'US',
  	site_type: 'news',
  	size: 10,		// returns 10 stories
  	location: 'pittsburgh'
  }

  try{
  	webhose.search('pittsburgh', ops, function(err, res) ){
  		res.send(res.data); 
  	}
  } catch (ex) {
  	console.log(ex);
  	break;
  }
});
// End of Justin's Shitty TEST

//db config
//mongoose.connect(what database, man?); -- RIP to GeoDB
app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/location', locations);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
