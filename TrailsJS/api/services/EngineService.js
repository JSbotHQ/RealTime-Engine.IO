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

            socket.on('message', (data) => {
                socket.send(data)
            })

            socket.on('close', () => {
                console.log(socket.id + `Disconnect`)
            })
        });
    }
}

