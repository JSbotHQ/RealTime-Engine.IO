# RealTime-Engine.IO

#1. ExpressJS
  - `cd ExpressJS`
  - start the server by `npm start`.

  i. Client to Server messaging
   - go to `http://localhost:4000/chat`.

  client code logic:

        socket.send(message)

        socket.on('message', (msg) => {
            console.log(msg)
        });


  server code logic:

        socket.send(data)
        socket.on('message', (data) => {
            console.log(data)
        })

  ii. room messaging
   - It is not possible in engine.io.