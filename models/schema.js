
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var locationSchema = new Schema({
	city: String,
	state: String,	
	country: String
});

locationSchema.virtual('name.full').get(function () {
	return this.city + ', ' + this.state + ', ' + this.country;
});

var newsSchema = new Schema({
	title: String,
	description: String,
	url: String,
});

// compile location model
var Location = mongoose.model('Location', locationSchema);

//create documents

var pitt = new Location({
	city: 'Pittsburgh',
	state: 'Pennsylvania',
	country: 'USA'
});

pitt.save(function (err) {
	if (err) return handleError(err);
})

var ny = new Location({
	city: 'New York',
	state: 'New York',
	country: 'USA'
});

ny.save(function (err) {
	if (err) return handleError(err);
})

var bos = new Location({
	city: 'Boston',
	state: 'Massachusettes',
	country: 'USA'
});

bos.save(function (err) {
	if (err) return handleError(err);
})

var dc = new Location({
	city: 'Washington',
	state: 'DC',
	country: 'USA'
});

dc.save(function (err) {
	if (err) return handleError(err);
})

var balt = new Location({
	city: 'Baltimore',
	state: 'Maryland',
	country: 'USA'
});

balt.save(function (err) {
	if (err) return handleError(err);
})

var atl = new Location({
	city: 'Atlanta',
	state: 'Georgia',
	country: 'USA'
});

atl.save(function (err) {
	if (err) return handleError(err);
})

var mia = new Location({
	city: 'Miami',
	state: 'Florida',
	country: 'USA'
});

mia.save(function (err) {
	if (err) return handleError(err);
})

var no = new Location({
	city: 'New Orleans',
	state: 'Louisianna',
	country: 'USA'
});

no.save(function (err) {
	if (err) return handleError(err);
})

var chi = new Location({
	city: 'Chicago',
	state: 'Illinois',
	country: 'USA'
});

chi.save(function (err) {
	if (err) return handleError(err);
})

var phe = new Location({
	city: 'Phoenix',
	state: 'Arizona',
	country: 'USA'
});

phe.save(function (err) {
	if (err) return handleError(err);
})

var la = new Location({
	city: 'Los Angeles',
	state: 'California',
	country: 'USA'
});

la.save(function (err) {
	if (err) return handleError(err);
})

var sea = new Location({
	city: 'Seatle',
	state: 'Washington',
	country: 'USA'
});

sea.save(function (err) {
	if (err) return handleError(err);
})

var okc = new Location({
	city: 'Oklahoma City',
	state: 'Oklahoma',
	country: 'USA'
});

okc.save(function (err) {
	if (err) return handleError(err);
})

var kc = new Location({
	city: 'Kansas City',
	state: 'Missouri',
	country: 'USA'
});

kc.save(function (err) {
	if (err) return handleError(err);
})

var aus = new Location({
	city: 'Austin',
	state: 'Texas',
	country: 'USA'
});

aus.save(function (err) {
	if (err) return handleError(err);
})

var cin = new Location({
	city: 'Cincinnati',
	state: 'Ohio',
	country: 'USA'
});

cin.save(function (err) {
	if (err) return handleError(err);
})

var stp = new Location({
	city: 'St. Paul',
	state: 'Minnesota',
	country: 'USA'
});

stp.save(function (err) {
	if (err) return handleError(err);
})

var phi = new Location({
	city: 'Philadelphia',
	state: 'Pennsylvania',
	country: 'USA'
});

phi.save(function (err) {
	if (err) return handleError(err);
})

var dal = new Location({
	city: 'Dallas',
	state: 'Texas',
	country: 'USA'
});

dal.save(function (err) {
	if (err) return handleError(err);
})

var col = new Location({
	city: 'Columbus',
	state: 'Ohio',
	country: 'USA'
});

col.save(function (err) {
	if (err) return handleError(err);
})

var indy = new Location({
	city: 'Indianopolis',
	state: 'Indiana',
	country: 'USA'
});

indy.save(function (err) {
	if (err) return handleError(err);
})

cd chlt = new Location({
	city: 'Charlotte',
	state: 'North Carolina',
	country: 'USA'
});

chlt.save(function (err) {
	if (err) return handleError(err);
})

cd den = new Location({
	city: 'Denver',
	state: 'Colorado',
	country: 'USA'
});

den.save(function (err) {
	if (err) return handleError(err);
})

cd lv = new Location({
	city: 'Las Vegas',
	state: 'Nevada',
	country: 'USA'
});

lv.save(function (err) {
	if (err) return handleError(err);
})

cd alb = new Location({
	city: 'Albuquerque',
	state: 'New Mexico',
	country: 'USA'
})

alb.save(function (err) {
	if (err) return handleError(err);
})