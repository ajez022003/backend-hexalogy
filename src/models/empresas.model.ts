import mongoose from "mongoose";


export interface empresas{
    id: mongoose.Types.ObjectId
    nombre:string
    logo:string
    descripcion: string
    productos:Array<string>
}
