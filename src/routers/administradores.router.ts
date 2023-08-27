import express from 'express'
import { obtenerAdministradorPorId, obtenerAdministradores } from '../controllers/administrador.controller'

const router=express.Router()

router.get('/',obtenerAdministradores)

router.get('/:id', obtenerAdministradorPorId)