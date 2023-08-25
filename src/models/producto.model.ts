import mongoose from "mongoose";
export interface especificaciones{
    modelo:string
    garantia:string
    red:string
    tamaño_pantalla: string
    memoria_ram: string
}


export interface producto{
    _id: mongoose.Types.ObjectId
    nombre:string
    empresa:string
    categoria:string
    precio: number
    descripcion:string
    especificaciones:Array<especificaciones>
    colores:Array<string>
}