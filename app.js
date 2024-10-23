const express = require('express') //Utilizando el framework

const app = express(); //Instancia de express

const puerto = 3000

let personas = require ('./api/datos.json')
/*
GET POST
*/

app.get('/', (req,res)=>[
    res.send('<h1> Bienvenido a mi servidor </h1>')
])

app.listen(puerto,()=>{
    console.log("Servidor funcionando");
})
