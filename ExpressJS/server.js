const engine = require('engine.io');
const express =  require('express')
const app =express();
const http = require('http').Server(app);
const server = engine.attach(http);

app.use(express.static(__dirname + '/public'));

server.on('connection', function (socket) {

    console.log(socket.id+' connected');

    socket.on('message',(data)=>{
        console.log(data)
        socket.send(data)
    })

});

http.listen(3000, ()=>{
    console.log('listening on *:3000');
});

// Routes for private chat(peer to peer)
app.get('/chat', (req, res)=>{
    res.sendfile('chat.html', {root: './public'});
});

// Route for group chat (room chat)
app.get('/group', (req, res)=> {
    res.sendfile('group.html', {root: './public'});
});
