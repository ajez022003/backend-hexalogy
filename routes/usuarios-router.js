var express=require('express')
var router=express.Router()
var usuario=require('../modules/models/usuario')
var usuarios=[{
    
}]
//crear un usuario
router.post('/', function(req, res){
    let usuario={
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais,
        contrasena: req.body.contrasena,
    }
    usuarios.push(usuario);
        res.send({mensaje:'Registro guardado',usuario:usuario});
    
   
});
//obtener un usuario
router.get('/:id',function(req,res){
    if (req.params.id>(usuarios.length-1))
        res.send({codigoResultado:1,mensaje:"Usuario no existe"})
    else
    res.send({codigoResultado:0,mensaje:"Usuario Encontrado"})
    res.send(usuarios[req.params.id])
})
//obtener todos los usuarios
router.get('/', function(req,res){
    res.send(usuarios)
})
//actualizar un usuario
router.put('//:id', function(req,res){
    let usuario={
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fechaNacimiento: req.body.fechaNacimiento,
        pais: req.body.pais
    }
    usuarios[req.params.id]=usuario;
    res.send({codigoResultado:1,mensaje:"Usuario Actualizado"})
})
//eliminar un usuario
router.delete('/:id', function(req,res){
    usuarios.splice(req.params.id,1);
    res.send({codigoResultado:1,mensaje:"Usuario Eliminado"})
    
})
module.exports =router;