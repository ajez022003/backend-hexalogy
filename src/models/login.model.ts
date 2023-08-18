import mongoose from "mongoose";
export interface Carrito{
producto: string
precio: number
}

export interface login{
    _id?: mongoose.Types.ObjectId
    nombre: string
    apellido: string
    edad: number
    correo: string
    contrasena: string
    carrito: Array<Carrito>
}