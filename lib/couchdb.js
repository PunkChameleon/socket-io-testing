var cradle = require('cradle');

var db = new(cradle.Connection)("http://127.0.0.1/", 5984, {
	auth: {
		username: "admin",
		password: "admin"
	},
	cache: true,
	retries: 3,
	retryTimeout: 30 * 1000
}).database('socket-tester'); //database name

module.exports = db;