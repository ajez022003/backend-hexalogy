import mongoose from "mongoose";

export interface Carrito{
producto: string
precio: number
}

export interface usuarios{
    _id?: mongoose.Types.ObjectId
    nombre: string
    apellido: string
    edad: number
    correo: string
    contrasena: string
    carrito: Array<Carrito>
}