import mongoose from "mongoose";
import { administradores,motoristaCargo } from "./administradores.model";

const schema= new mongoose.Schema<administradores>({
  
    correo: String,
    cargo:  String,
    motoristas_a_cargo:Array<motoristaCargo>,
})
export const administradoresSchema =mongoose.model('administradores',schema)