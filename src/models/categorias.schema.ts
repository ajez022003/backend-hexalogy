import mongoose from "mongoose";
import { categorias, producto } from "./categorias.model";


const schema= new mongoose.Schema<categorias>({
categoria: String,
descripcion: String,
producto: Array<producto>,
})