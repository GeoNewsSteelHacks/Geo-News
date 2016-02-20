// city model

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var locationSchema = new Schema({
	city: String,
	state: String,	
	country: String
});

var Location = mongoose.model('Location', locationSchema);
