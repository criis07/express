const express = require('express');
const config = require('./config')
const clientes = require('./Modules/Clientes/rutas')

const app = express();

app.set('port', config.app.port)

//Routes

app.use('/api/clientes' , clientes)

module.exports = app;