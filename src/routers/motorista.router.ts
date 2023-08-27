import express from 'express'
import { agregarMotorista, obtenerMotoristaPorId, obtenerNombresMotoristas } from '../controllers/motorista.controller';

const router =express.Router();

router.get('/',obtenerNombresMotoristas)

router.get('/:id', obtenerMotoristaPorId)

router.post('/', agregarMotorista)

export default router