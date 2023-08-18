import express, {Request, Response, Express} from 'express';
import usuarioRouter from './src/routers/usuarios.router'

import {Database} from './src/utils/database'


const app:Express=express()
const db: Database =new Database()

app.use(express.json())
app.use('/usuarios', usuarioRouter)



app.get("/",(req:Request, res:Response)=>{
    res.send("Servidor para el ejercicio de spotify levantado")
    res.end()
})
app.listen(2000, ()=>{
    console.log("Servidor levantado en el puerto 3000")
})