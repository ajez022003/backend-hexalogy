import express from 'express'
import { actualizarUsuario, agregarUsuario, eliminarUsuario, obtenerUsuarioPorId, obtenerUsuarios } from '../controllers/usuarios.controller'
const router =express.Router();

//Agregar usuarios nuevos a la lista
// http://localhost:2000/usuarios
router.post('/', obtenerUsuarios) 


//(controlador usuarios)mostrar los elementos de usuarios en la ventana modal
// http://localhost:3000/usuarios/:id
router.get('/:id',obtenerUsuarioPorId)
//(controlador usuario)mostrar las listas de playlist de cada usuario

router.post('/',agregarUsuario)

router.post('/:id',actualizarUsuario)

router.delete('/:id',eliminarUsuario)

export default router