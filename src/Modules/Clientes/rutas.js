const express = require('express');

const routes = express.Router();

const responses = require('../../Red/respuestas')
const clientController = require('../../Modules/Clientes/clientesController')


routes.get('/', function(req, res){
    const data = clientController.getAll().then ((items) => {
        responses.success(req, res, items, 200);
    });
    
});

module.exports = routes;
