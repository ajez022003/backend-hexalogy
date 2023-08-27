import { Request, Response } from 'express';
import { UsuarioSchema } from '../models/usuario.schema';
import mongoose from "mongoose";

const usuarios = [
    {
        "_id": "64e6c2f7555ec58b6c62420b",
        "nombre": "Pedro",
        "apellido": "Ramírez",
        "edad": "27",
        "correo": "pedro@gmail.com",
        "contrasena": "clave123",
        "carrito_de_compras": [
            {
                "producto": "Teléfono",
                "precio": "499.99"
            },
            {
                "producto": "Computadora portátil",
                "precio": "899"
            },
            {
                "producto": "Auriculares inalámbricos",
                "precio": "129.99"
            }
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c62420c",
        "nombre":"Carmen",
        "apellido":"López",
        "edad":"33",
        "correo":"carmen@gmail.com",
        "contrasena":"contraseña456",
        "carrito_de_compras":
        [
            {
            "producto":"Tablet",
            "precio":"299"},
            {
            "producto":"Monitor",
            "precio":"249.99"},
            {"producto":"Auriculares con cancelación de ruido",
            "precio":"189.5"}
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c62420d",
        "nombre":"Miguel",
        "apellido":"Fernández",
        "edad":"29",
        "correo":"miguel@gmail.com",
        "contrasena":"seguraPass",
        "carrito_de_compras":
        [
            {
                "producto":"Smartphone",
                "precio":"699"},
            {
                "producto":"Laptop",
                "precio":"1199.99"
            },
            {"producto":"Auriculares deportivos",
            "precio":"69.99"}
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c62420e",
        "nombre":"Sofía",
        "apellido":"García",
        "edad":"24",
        "correo":"sofia@gmail.com",
        "contrasena":"miClaveSecreta",
        "carrito_de_compras":
        [
            {
            "producto":"Smartwatch",
            "precio":"149.5"
            },
            {
            "producto":"PC de escritorio",
            "precio":"799"
            },
            {
            "producto":"Auriculares con micrófono",
            "precio":"59"
        }
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c62420f",
        "nombre":"Jorge",
        "apellido":"Martínez",
        "edad":"31",
        "correo":"jorge@gmail.com",
        "contrasena":"contraseña123",
        "carrito_de_compras":
        [
            {
                "producto":"Teléfono inteligente",
                "precio":"549"
            },
            {
                "producto":"Laptop ultradelgada",
                "precio":"999.99"
            },
            {
                "producto":"Auriculares Bluetooth",
                "precio":"79.95"
            }
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c624210",
        "nombre":"Isabel",
        "apellido":"Pérez",
        "edad":"26",
        "correo":"isabel@gmail.com",
        "contrasena":"claveSegura",
        "carrito_de_compras":
        [
            {
                "producto":"Tableta",
                "precio":"399"
            },
            {
            "producto":"All-in-One PC",
            "precio":"699.5"
            },
            {
            "producto":"Auriculares gaming",
            "precio":"129"
            }
            ]
        },
    {
        "_id":"64e6c2f7555ec58b6c624211",
        "nombre":"Fernando",
        "apellido":"Hernández",
        "edad":"28",
        "correo":"fernando@gmail.com",
        "contrasena":"passFernando",
        "carrito_de_compras":
        [
            {
                "producto":"Teléfono móvil",
                "precio":"479.99"
            },
            {
                "producto":"Laptop de gaming",
                "precio":"1499"
            },
            {"producto":"Auriculares con iluminación RGB",
            "precio":"89.99"
            }
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c624212",
        "nombre":"Elena",
        "apellido":"Díaz",
        "edad":"30",
        "correo":"elena@gmail.com",
        "contrasena":"contraseña456",
        "carrito_de_compras":
        [
            {
                "producto":"Smartphone",
                "precio":"599"
            },
            {
                "producto":"Portátil 2 en 1",
                "precio":"849"
            },
            {
                "producto":"Auriculares de estudio",
                "precio":"109"
            }
        ]
    },
        
    {
        "_id":"64e6c2f7555ec58b6c624213",
        "nombre":"Ricardo",
        "apellido":"Gómez",
        "edad":"35","correo":"ricardo@gmail.com",
        "contrasena":"clave123",
        "carrito_de_compras":
        [
            {
                "producto":"iPhone",
                "precio":"849.99"
            },
            {
                "producto":"PC gaming",
                "precio":"1199.5"
            },
            {
                "producto":"Auriculares con sonido envolvente",
                "precio":"149"
            }
        ]
    },
    {
        "_id":"64e6c2f7555ec58b6c624214",
        "nombre":"Daniela",
        "apellido":"Vargas",
        "edad":"23","correo":"daniela@gmail.com",
        "contrasena":"contraseña456",
        "carrito_de_compras":
        [
            {
                "producto":"Móvil Android",
                "precio":"349"
            },
            {
                "producto":"Notebook",
                "precio":"599"
            },
            {
                "producto":"Auriculares con diseño elegante",
                "precio":"79.99"
            }
        ]
    }
]

export const obtenerUsuarios = (req: Request, res: Response) => {
    res.json(usuarios);
};

export const obtenerUsuarioPorId = (req: Request, res: Response) => {
    const usuarioId = req.params.id;
    const usuario = usuarios.find(user => user._id === usuarioId);

    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ status: false, message: 'Usuario no encontrado' });
    }
};

export const agregarUsuario = (req: Request, res: Response) => {
    const nuevoUsuario = req.body;
    usuarios.push(nuevoUsuario);

    res.json({ status: true, message: 'Usuario agregado exitosamente' });
};

export const actualizarUsuario = (req: Request, res: Response) => {
    const usuarioId = req.params.id;
    const usuarioActualizado = req.body;

    const usuarioIndex = usuarios.findIndex(user => user._id === usuarioId);

    if (usuarioIndex !== -1) {
        usuarios[usuarioIndex] = usuarioActualizado;
        res.json({ status: true, message: 'Usuario actualizado exitosamente' });
    } else {
        res.status(404).json({ status: false, message: 'Usuario no encontrado' });
    }
};

export const eliminarUsuario = (req: Request, res: Response) => {
    const usuarioId = req.params.id;

    const usuarioIndex = usuarios.findIndex(user => user._id === usuarioId);

    if (usuarioIndex !== -1) {
        usuarios.splice(usuarioIndex, 1);
        res.json({ status: true, message: 'Usuario eliminado exitosamente' });
    } else {
        res.status(404).json({ status: false, message: 'Usuario no encontrado' });
    }
};


