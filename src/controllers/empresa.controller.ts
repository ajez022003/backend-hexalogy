import { Request, Response } from 'express';
import { EmpresaSchema } from '../models/empresa.schema';
import mongoose from "mongoose";


const empresas = [
    {"_id":"64e6de4f555ec58b6c98a61c",
        "nombre":"Apple",
        "logo":"apple_logo.png",
        "descripcion":"Innovación y diseño en productos tecnológicos",
        "productos":
        [
            "computadoras","teléfonos","tabletas"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a61d",
        "nombre":"Samsung",
        "logo":"samsung_logo.png",
        "descripcion":"Líder en electrónica y tecnología",
        "productos":
        [
            "teléfonos","tabletas","cámaras de fotografía"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a61e",
        "nombre":"Microsoft",
        "logo":"microsoft_logo.png",
        "descripcion":"Empoderando a las personas a través de la tecnología",
        "productos":
        [
            "computadoras","tabletas","auriculares"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a61f",
        "nombre":"Sony","logo":"sony_logo.png",
        "descripcion":"Innovación en entretenimiento y tecnología",
        "productos":
        [
            "teléfonos","cámaras de fotografía","cámaras de video"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a620",
        "nombre":"Logitech","logo":"logitech_logo.png",
        "descripcion":"Mejorando la experiencia digital",
        "productos":
        [
            "auriculares","cámaras de video","periféricos"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a621",
        "nombre":"Canon","logo":"canon_logo.png",
        "descripcion":"Capturando momentos con precisión",
        "productos":
        [
            "cámaras de fotografía","cámaras de video","impresoras"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a622",
        "nombre":"Nikon","logo":"nikon_logo.png",
        "descripcion":"Excelencia en fotografía",
        "productos":
        [
            "cámaras de fotografía","binoculares","telescopios"
        ]
    },
    {"_id":"64e6de4f555ec58b6c98a623",
        "nombre":"GoPro","logo":"gopro_logo.png",
        "descripcion":"Aventuras en acción",
        "productos":
        [
            "cámaras de video","accesorios deportivos"
        ]
    },
];

export const obtenerEmpresas = (req: Request, res: Response) => {
    res.json({ empresas });
};

export const obtenerEmpresaPorId = (req: Request, res: Response) => {
    const idEmpresa = req.params.id;
    const empresa = empresas.find((emp) => emp._id === idEmpresa);
    if (empresa) {
        res.json({ empresa });
    } else {
        res.status(404).json({ message: 'Empresa no encontrada' });
    }
};
