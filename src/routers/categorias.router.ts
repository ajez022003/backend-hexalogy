import express from 'express'
import { obtenerCategoriaPorId, obtenerCategorias } from '../controllers/categoria.controller'

const router= express.Router()


router.get('/', obtenerCategorias)

router.get('/:id',obtenerCategoriaPorId)

export default router