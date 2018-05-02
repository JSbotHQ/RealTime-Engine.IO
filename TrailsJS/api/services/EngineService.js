'use strict'

const Service = require('trails/service')
const engine = require('engine.io');
/**
 * @module EngineService
 * @description TODO document Service
 */
module.exports = class EngineService extends Service {
    socketInit(http) {

        const server = engine.attach(http);

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
            socket.on('close', disconnect)
        });
    }
}

