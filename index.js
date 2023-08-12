var express = require('express');
var bodyParser= require('body-parser');

var database =require('./modules/database');
var usuariosRouter = require('./routes/usuarios-router')
//var cancionesRouter=require('./routes/canciones-router')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/usuarios',usuariosRouter)
//app.use('/canciones',cancionesRouter)



var usuarios=[{
    nombre: 'Juan',
    apellido: 'Perez',
    fechaNacimiento: '12/07/2007',
    pais: 'Honduras',
}]
app.get('/', function(req, res){
res.send(testModule.mostrarMensaje())
})


//

app.listen(1111, function(){
console.log("Servidor Levantado");
});
