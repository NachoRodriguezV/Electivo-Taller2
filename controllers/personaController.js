'use strict'

var Persona = require('../modelos/persona.js');

/*function guardar(req,res){
    
    let persona = new Persona()
    persona.rut = req.body.rut
    persona.nombre = req.body.nombre
    persona.apellido = req.body.apellido
    persona.direccion = req.body.direccion
    persona.comuna = req.body.comuna
    persona.ciudad = req.body.ciudad    
    persona.pais = req.body.pais
    fecha_de_nacimiento = re.body.fecha_de_nacimiento

    persona.save((err,personastore)=>{
        
        if(err) res.status(500).send("Error"+err)

        res.status(200).send({persona: personastore})
    })
}*/

function guardar(req,res){

    res.status(200).send({message:'Si entra'})
}


module.exports = {
    guardar
}