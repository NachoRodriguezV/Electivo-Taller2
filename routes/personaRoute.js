'use strict'

//cargamos modulo express para crear rutas
var express = require('express'); 

//cargamos el controlador que usaremos
var personaController = require('../controllers/personaController'); 

var api = express.Router();

//Rutas

//api.post('/personas', personaController.guardar);

//Configuracion

module.exports = api;
