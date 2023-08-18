import mongoose from "mongoose";
import {usuarios,Carrito } from "./usuario.model";

const schema= new mongoose.Schema<usuarios>({
    nombre:String,
    apellido:String,
    edad: Number,
    correo: String,
    contrasena: String,
    carrito: Array<Carrito>
})
export const usuarioSchema =mongoose.model('usuario',schema)