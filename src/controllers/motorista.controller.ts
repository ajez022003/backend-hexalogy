import { Request, Response } from 'express';
import { motoristaSchema } from '../models/motorista.schema';
import mongoose from "mongoose";

export const obtenerNombresMotoristas = (req: Request, res: Response) => {
    const nombresMotoristas = ['Miguel', 'Isabel', 'Jorge', 'Ricardo'];
    res.json({ nombresMotoristas });
};

export const obtenerMotoristaPorId = async (req: Request, res: Response) => {
    try {
        const motoristaId = req.params.id; 
        
        const motorista = await motoristaSchema.findById(motoristaId);

        if (motorista) {
            res.json({ status: true, motorista });
        } else {
            res.json({ status: false, message: 'Motorista no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener motorista:', error);
        res.status(500).json({ status: false, message: 'Error en el servidor' });
    }
};


export const agregarMotorista = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, correo } = req.body; 
        const nuevoMotorista = new motoristaSchema({ nombre, apellido, correo });
        const motoristaGuardado = await nuevoMotorista.save();

        res.json({ status: true, message: 'Motorista agregado correctamente', motorista: motoristaGuardado });
    } catch (error) {
        console.error('Error al agregar motorista:', error);
        res.status(500).json({ status: false, message: 'Error en el servidor' });
    }
};
