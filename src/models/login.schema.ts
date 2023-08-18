import mongoose from "mongoose";
import { Carrito, login } from "./login.model";

const schema= new mongoose.Schema<login>({
    nombre:String,
    apellido:String,
    edad: Number,
    correo: String,
    contrasena: String,
    carrito: Array<Carrito>
})
export const loginSchema =mongoose.model('login',schema)