const engine = require('engine.io');
const express = require('express')
const app = express();
const http = require('http').Server(app);
const server = engine.attach(http);

app.use(express.static(__dirname + `/public`));

server.on('connection', (socket) => {

    console.log(socket.id + `connected`);

    //HANDLERS
    let disconnect = () => {
        console.log(socket.id + `Disconnect`)
    }

    let sendMessage = (data) => {
        socket.send(data)
    }

    //LISTENERS
    /**
     * send Message to client
     */
    socket.on('message', sendMessage)

    /**
     * Disconnected client
     */
    socket.on('close',disconnect )
});

http.listen(3000, () => {
    console.log('listening on *:4000');
});

// Routes for private chat(peer to peer)
app.get('/chat', (req, res) => {
    res.sendfile('chat.html', {root: './public'});
});

