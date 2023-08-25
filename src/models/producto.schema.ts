import mongoose from "mongoose";
import {producto, especificaciones } from "./producto.model";

const schema= new mongoose.Schema<producto>({
  
    nombre:String,
    empresa:String,
    categoria:String,
    precio: Number,
    descripcion:String,
    especificaciones:Array<especificaciones>,
    colores:Array<string>
})
export const productoSchema =mongoose.model('producto',schema)