var cradle = require('cradle');

var dbAddress = "http://127.0.0.1"; // can also use "http://goblin.iriscouch.com" to test cross domain
var db = new(cradle.Connection)(dbAddress, 5984, {
	auth: {
		username: "admin",
		password: "admin"
	},
	cache: false,
	retries: 3,
	retryTimeout: 30 * 1000
}).database('socket-io-testing'); //database name

module.exports = db;