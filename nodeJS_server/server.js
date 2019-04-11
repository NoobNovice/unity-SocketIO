var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

app.set('port', process.env.PORT || 8080);

io.on('connection', function(socket){
	console.log("user connected");
	socket.on('beep', function(){
		socket.emit('boop');
	});
})

server.listen(app.get('port'),function(){
    console.log("------- SERVER IS RUNNING -------");
});