'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PersonaSchema = ({
    rut:String,
    nombre:String,
    apellido:String,
    direccion:String,
    comuna:String,
    ciudad:String,
    pais:String,
    fecha_de_nacimiento:Date
})

module.exports = mongoose.model('personas',PersonaSchema)