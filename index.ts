import express, {Request, Response, Express} from 'express';
import usuarioRouter from './src/routers/usuarios.router'
import productoRouter from './src/routers/productos.router'
import motoristaRouter from './src/routers/motorista.router'
import empresaRouter from './src/routers/empresas.router'
import categoriaRouter from './src/routers/categorias.router'
import cors from 'cors'
import {Database} from './src/utils/database'


const app:Express=express()
const db: Database =new Database()
app.use(cors())
app.use(express.json())
app.use('/usuarios', usuarioRouter)
app.use('/productos',productoRouter)
app.use('/motoristas', motoristaRouter)
app.use('/empresas', empresaRouter)
app.use('/categorias',categoriaRouter)



app.get("/",(req:Request, res:Response)=>{
    res.send("Servidor para el ejercicio de spotify levantado")
    res.end()
})
app.listen(2000, ()=>{
    console.log("Servidor levantado en el puerto 3000")
})