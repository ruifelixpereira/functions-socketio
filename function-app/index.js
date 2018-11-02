module.exports = async function (context, req) {

    context.log('Test Socket.io Function started!');

    const io = require('socket.io-client');
    const socketUrl = process.env['socketio_url'];

    let socket = io.connect(socketUrl);

    socket.on('connect', () => {
        context.log("Socket.io connected!!!");

		let postData = {
            userId: 1000,
            data: "xpto"
        }
        socket.emit('newEvent', postData);
        
        //this.state.socket.disconnect();
        context.done();        
    });

    socket.on('connect_error', (error) => {
        context.log("Socket.io connect error: " + error);
        context.done();
    });
};