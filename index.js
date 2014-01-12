/* Express 3 requires that you instantiate a `http.Server` to attach socket.io to first */
var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server),
	port = 8080,
	db = require('./lib/couchdb'),
	url = 'http://localhost:' + port + '/';

server.listen(port);
console.log("Express server listening on port " + port);
console.log(url);

app.get('/', function (req, res) {
	res.sendfile(__dirname + '/index.html');
});


var pollingLoop = function (socket) {

	db.get('testing', function (err, doc) {
		// Emit a message to send it to the client.
		socket.emit('testing', doc);

		socket.on('it_works', function (data) {
			setTimeout(pollingLoop(socket), 10000);
		})
	});
};

//Socket.io emits this event when a connection is made.
io.sockets.on('connection', function (socket) {

	pollingLoop(socket);

});