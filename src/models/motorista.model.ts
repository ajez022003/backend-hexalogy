import mongoose from "mongoose";

export interface motorista{
    _id: mongoose.Types.ObjectId
    nombre:string
    apellido:string
    correo: string
}