import { Request, Response } from 'express';
import { AdministradorSchema } from '../models/administrador.schema';
import mongoose from "mongoose";


const administradores = [
    {
        "_id": "64e6c2f7555ec58b6c62420b",
        "correo": "pedro@gmail.com",
        "cargo": "Gerente de Operaciones",
        "motoristas_a_cargo": [
            {
                "_id": "64e6c2f7555ec58b6c62420d",
                "nombre": "Miguel",
                "apellido": "Fernández",
            },
            {
                "_id": "64e6c2f7555ec58b6c624210",
                "nombre": "Isabel",
                "apellido": "Pérez",
            },
        ],
    },
    {
        "_id": "64e6c2f7555ec58b6c62420c",
        "correo": "carmen@gmail.com",
        "cargo": "Supervisora de Logística",
        "motoristas_a_cargo": [
            {
                "_id": "64e6c2f7555ec58b6c62420f",
                "nombre": "Jorge",
                "apellido": "Martínez",
            },
            {
                "_id": "64e6c2f7555ec58b6c624213",
                "nombre": "Ricardo",
                "apellido": "Gómez",
            },
        ],
    },
];

export const obtenerAdministradores = (req: Request, res: Response) => {
    res.json({ administradores });
};

export const obtenerAdministradorPorId = (req: Request, res: Response) => {
    const idAdministrador = req.params.id;
    const administrador = administradores.find((adm) => adm._id === idAdministrador);
    if (administrador) {
        res.json({ administrador });
    } else {
        res.status(404).json({ message: 'Administrador no encontrado' });
    }
};
