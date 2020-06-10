'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var persona_routes = ('./routes/personaRoute')
const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api', persona_routes)

mongoose.connect('mongodb+srv://nacho:conectar123@cluster0-muu6j.mongodb.net/Taller2?retryWrites=true&w=majority',(err,res) =>{
     
       app.listen(3000,()=>{
            console.log("Funcionando en el puerto 3000")
        })
})

