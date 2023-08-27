import express from 'express'
import { obtenerEmpresaPorId, obtenerEmpresas } from '../controllers/empresa.controller'


const router=express.Router()

router.get('/',obtenerEmpresas)

router.get('/:id', obtenerEmpresaPorId)

export default router
