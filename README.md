# RealTime-Engine.IO

#1. ExpressJS
  - `cd ExpressJS`
  - start the server by `npm start`.

  i. Client to Server messaging
   - go to `http://localhost:3000/chat`.

  client code logic:

        sendMessage = () => {
                   let message = $('#m').val();
                   socket.send(message);
                   $('#m').val('');
                   return false;
               }

        socket.on('message', (msg) => {
             $('#messages').append($('<li>').text(msg));
        });


  server code logic:

     socket.on('message', (data) => {
         socket.send(data)
     })

Note : Engine is meant to be bundled with frameworks. Socket.IO includes Engine, therefore serving two clients is not necessary.
       If you use Socket.IO, then review the example here: https://github.com/JSbotHQ/RealTime-Socket.IO