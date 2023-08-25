import mongoose from "mongoose";
import { motorista } from "./motorista.model";

const schema= new mongoose.Schema< motorista>({
    nombre:String,
    apellido: String,
    correo: String,
})
export const motoristaSchema =mongoose.model('motorista',schema)