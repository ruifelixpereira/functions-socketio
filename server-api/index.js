var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);


/**
 * Create Socket.io server (Web Sockets).
 */
//var io = require('socket.io')(server, {transports: ['websocket']});
var io = require('socket.io')(server);

/**
 * Socket.io setup.
 */
io.on('connection', function (socket) {
  
  console.log('User connected. Socket id %s', socket.id);

	socket.on('newEvent',(eventData)=>{
      console.log({message:"New Event Data: " + JSON.stringify(eventData)});
	});

  socket.on('disconnect', function () {
      console.log('User disconnected. Socket id %s', socket.id);
  });
});