import mongoose from "mongoose";
import { empresas } from "./empresas.model";

const schema= new mongoose.Schema<empresas>({
    nombre:String,
    logo:String,
    descripcion: String,
    productos:Array<any>,
})