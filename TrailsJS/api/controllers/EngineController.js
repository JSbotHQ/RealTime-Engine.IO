'use strict'

const Controller = require('trails/controller')

/**
 * @module EngineController
 * @description TODO document Controller.
 */
module.exports = class EngineController extends Controller {

    chat(req, res) {
        return res.sendFile('chat.html', {root: './public'});
    }

}

