import { Request, Response } from 'express';
import { CategoriaSchema } from '../models/categoria.schema';
import mongoose from "mongoose";


const categorias = [
    {
        "_id": "64e6c9bc555ec58b6c71567e",
        "categoria": "Teléfonos",
        "descripcion": "Smartphones y teléfonos móviles de última generación.",
        "productos": [
            {
                "nombre": "iPhone 13",
                "precio": "999.99",
                "empresa": "Apple"
            },
            {
                "nombre": "Samsung Galaxy S21",
                "precio": "899",
                "empresa": "Samsung"
            },
            {
                "nombre":"Google Pixel 6",
                "precio":"749.5",
                "empresa":"Google"
            },
            {
                "nombre":"OnePlus 9 Pro",
                "precio":"799",
                "empresa":"OnePlus"
            },
            {
                "nombre":"Xiaomi Mi 11",
                "precio":"649.99",
                "empresa":"Xiaomi"
            }
            ]
        },
        {
            "_id":"64e6c9bc555ec58b6c71567f",
            "categoria":"Computadoras",
            "descripcion":"Laptops, desktops y otros dispositivos de cómputo.",
            "productos":
            [
                {
                    "nombre":"MacBook Pro",
                    "precio":"1499",
                    "empresa":"Apple"
                },
                {    
                    "nombre":"Dell XPS 13",
                    "precio":"1199.99",
                    "empresa":"Dell"
                },
                {    
                    "nombre":"HP Envy",
                    "precio":"999",
                    "empresa":"HP"
                },
                {    
                    "nombre":"Lenovo ThinkPad",
                    "precio":"849.5",
                    "empresa":"Lenovo"
                },
                {    
                    "nombre":"Asus ROG Zephyrus",
                    "precio":"1299",
                    "empresa":"Asus"
                }
            ]
        },
        {
            "_id":"64e6c9bc555ec58b6c715680",
            "categoria":"Tabletas",
            "descripcion":"Tablets y dispositivos similares con pantalla táctil.",
            "productos":
            [
                {
                    "nombre":"iPad Air",
                    "precio":"599",
                    "empresa":"Apple"
                },
                {
                    "nombre":"Samsung Galaxy Tab S7",
                    "precio":"549.99",
                    "empresa":"Samsung"
                },
                {
                    "nombre":"Microsoft Surface Pro 7",
                    "precio":"799",
                    "empresa":"Microsoft"
                },
                {
                    "nombre":"Amazon Fire HD 10",
                    "precio":"149.5",
                    "empresa":"Amazon"
                },
                {
                    "nombre":"Lenovo Tab P11",
                    "precio":"299",
                    "empresa":"Lenovo"
                }
            ]
        },
        {
            "_id":"64e6c9bc555ec58b6c715681",
            "categoria":"Auriculares",
            "descripcion":"Auriculares y audífonos con diversas características.",
            "productos":
            [
                {
                    "nombre":"Sony WH-1000XM4",
                    "precio":"349.99",
                    "empresa":"Sony"
                },
                {
                    "nombre":"AirPods Pro",
                    "precio":"249",
                    "empresa":"Apple"
                },
                {
                    "nombre":"Bose QuietComfort 35 II",
                    "precio":"279.5",
                    "empresa":"Bose"
                },
                {
                    "nombre":"Jabra Elite 75t",
                    "precio":"169.99",
                    "empresa":"Jabra"
                },
                {
                    "nombre":"Sennheiser HD 660 S",
                    "precio":"499",
                    "empresa":"Sennheiser"}]},
        {
            "_id":"64e6c9bc555ec58b6c715684",
            "categoria":"Cámaras de video",
            "descripcion":"Cámaras de video para grabación de video y contenido multimedia.",
            "productos":
            [
                {
                    "nombre":"Sony Alpha A7S III",
                    "precio":"2999.99",
                    "empresa":"Sony"
                },
                {
                    "nombre":"Blackmagic Pocket Cinema Camera 6K",
                    "precio":"2499",
                    "empresa":"Blackmagic"
                },
                {
                    "nombre":"DJI Pocket 2",
                    "precio":"349",
                    "empresa":"DJI"
                },
                {
                    "nombre":"GoPro HERO10 Black",
                    "precio":"499",
                    "empresa":"GoPro"
                },
                {
                    "nombre":"Canon XA11",
                    "precio":"1199",
                    "empresa":"Canon"
                }
            ]
        },
        {
            "_id":"64e6c9bc555ec58b6c715685",
            "categoria":"Cámaras fotográficas",
            "descripcion":"Cámaras fotográficas para capturar imágenes de alta calidad.",
            "productos":
            [
                {
                    "nombre":"Canon EOS 5D Mark IV",
                    "precio":"2499",
                    "empresa":"Canon"},
                {
                    "nombre":"Nikon D850",
                    "precio":"2999.99",
                    "empresa":"Nikon"},
                {
                    "nombre":"Fujifilm X-T4",
                    "precio":"1699",
                    "empresa":"Fujifilm"},
                {
                    "nombre":"Sony Alpha A7R IV",
                    "precio":"2999",
                    "empresa":"Sony"},
                {
                    "nombre":"Leica Q2",
                    "precio":"5495",
                    "empresa":"Leica"
                }
            ]
    }
];
 

export const obtenerCategorias = (req: Request, res: Response) => {
    res.json({ categorias });
};

export const obtenerCategoriaPorId = (req: Request, res: Response) => {
    const idCategoria = req.params.id;
    const categoria = categorias.find((cat) => cat._id === idCategoria);
    if (categoria) {
        res.json({ categoria });
    } else {
        res.status(404).json({ message: 'Categoría no encontrada' });
    }
};
