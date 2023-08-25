import mongoose from "mongoose";
export interface producto{
    nombre:string
    precio: number
    empresa: string
}

export interface categorias{
_id: mongoose.Types.ObjectId
categoria: string
descripcion: string
producto: Array<producto>
}