import express from 'express'
import { Login, agregar_usuario,obtenerUsuario } from '../controllers/usuarios.controller'
const router =express.Router();

//Agregar usuarios nuevos a la lista
// http://localhost:2000/usuarios
router.post('/', agregar_usuario) 


//(controlador usuarios)mostrar los elementos de usuarios en la ventana modal
// http://localhost:2000/usuarios/login
router.post('/login',Login)
//(controlador usuario)mostrar las listas de playlist de cada usuario
// http://localhost:3000/usuarios/:id
router.get ('/:id',obtenerUsuario)


router.put('/:id_usuario/playlist')
export default router