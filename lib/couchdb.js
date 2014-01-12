var cradle = require('cradle');

var db = new(cradle.Connection)("http://goblin.iriscouch.com", 80, {
	auth: {
		username: "admin",
		password: "admin"
	},
	cache: true,
	retries: 3,
	retryTimeout: 30 * 1000
}).database('socket-io-testing'); //database name

module.exports = db;