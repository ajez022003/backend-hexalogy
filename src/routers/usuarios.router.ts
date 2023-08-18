import express from 'express'
import {obtenerNombresUsuarios, login,AgregarCancionesPlaylist} from '../controllers/usuarios.controller'
const router =express.Router();


//(controlador usuarios)mostrar los elementos de usuarios en la ventana modal
router.post('/login',login)
//(controlador usuario)mostrar las listas de playlist de cada usuario
// http://localhost:3000/usuarios/:id

//*(controlador usuarios)*agregar caciones de artistas a la lista de playlist del usuario*
// http://localhost:3000/usuarios/:id
router.put('/:id_usuario/playlist', AgregarCancionesPlaylist)
export default router