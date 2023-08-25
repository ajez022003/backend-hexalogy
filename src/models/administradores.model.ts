import mongoose from "mongoose";

export interface motoristaCargo{
_id:mongoose.Types.ObjectId
nombre:string
correo: string
}

export interface administradores{
    _id: mongoose.Types.ObjectId
    correo: string 
    cargo:  string
    motoristas_a_cargo:Array<motoristaCargo>
}