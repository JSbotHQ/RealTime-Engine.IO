// Hapi
const Hapi = require('hapi');

// Create a server with a host and port

const server = Hapi.server({
    host: 'localhost',
    port: 3000
});

const start = async () => {

    try {
        await server.register(require('inert'));

        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};
start();

//engine
const engine = require('engine.io');

// engine via Hapi
const serve = engine.attach(server.listener);

serve.on('connection', (socket) => {

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

// Serve static file
// ROUTES
server.route({
    method: 'GET',
    path: '/chat',
    handler: (request, h) => h.file('./public/chat.html')
});




