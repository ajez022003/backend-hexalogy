import express from "express";
import { obtenerProductoPorId, obtenerProductos } from "../controllers/producto.controller";

const router =express.Router();

router.get('/',obtenerProductos)

router.get('/:id' ,obtenerProductoPorId)

export default router
