import {Request, Response } from 'express'
import { loginSchema } from '../models/login.schema'

//(controlador usuarios)mostrar los elementos de usuarios en la ventana modal
export const obtenerNombresUsuarios =(req: Request, res: Response)=>{
   
}

//(controlador usuario)mostrar las listas de playlist de cada usuario
export const login= async(req: Request, res:Response)=>{
    const usuario= await loginSchema.findOne({correo: req.params.correo, contrasena: req.params.contrasena},{contrasena:false});
    if(usuario){

        res.send({status:true,message: 'login correcot',usuario})
    }else{
        res.send({status:false, message:'login incorrecto'})
    }
  
    res.end()
    
}
//*(controlador usuaeios)*agregar caciones de artistas a la lista de playlist del usuario*
export const AgregarCancionesPlaylist= (req: Request, res: Response)=>{
    res.send("agregar canciones a la playlist")
    res.end()
}