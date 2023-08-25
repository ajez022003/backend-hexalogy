import { Request, Response } from 'express';
import { ProductoSchema } from '../models/producto.schema';
import mongoose from "mongoose";


const productos = [
    {"_id":"64e6e9aa555ec58b6caa5c7c",
    "nombre":"iPhone 13 Pro",
    "empresa":"Apple",
    "categoria":"teléfonos",
    "precio":"1099.99",
    "descripcion":"El último smartphone premium de Apple con características avanzadas.",
    "especificaciones":
        {
            "modelo":"iPhone 13 Pro",
            "garantia":"1 año",
            "red":"5G",
            "tamaño_pantalla":"6.1 pulgadas",
            "memoria_ram":"6 GB"
            },
    "colores":
    ["Plata","Gris Espacial","Oro","Azul Grafito"]
},
    {"_id":"64e6e9aa555ec58b6caa5c7d",
    "nombre":"Samsung Galaxy S21",
    "empresa":"Samsung",
    "categoria":"teléfonos",
    "precio":"899.99",
    "descripcion":"El buque insignia de Samsung con un rendimiento excepcional.",
    "especificaciones":
        {
            "modelo":"Galaxy S21",
            "garantia":"2 años",
            "red":"5G",
            "tamaño_pantalla":"6.2 pulgadas",
            "memoria_ram":"8 GB"
            },
    "colores":
    ["Negro","Blanco","Gris","Rosa"]
},
    {"_id":"64e6e9aa555ec58b6caa5c7e",
    "nombre":"Surface Laptop 4",
    "empresa":"Microsoft",
    "categoria":"computadoras",
    "precio":"1299.99",
    "descripcion":"Rendimiento y elegancia se unen en esta laptop de Microsoft.",
    "especificaciones":
        {
            "modelo":"Surface Laptop 4",
            "garantia":"1 año",
            "red":"Wi-Fi 6",
            "tamaño_pantalla":"13.5 pulgadas",
            "memoria_ram":"16 GB"
            },
    "colores":
    ["Platino","Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c7f",
    "nombre":"Sony Alpha a7 III",
    "empresa":"Sony",
    "categoria":"cámaras de fotografía",
    "precio":"1999.99",
    "descripcion":"Cámara mirrorless de alta calidad para fotógrafos aficionados y profesionales.",
    "especificaciones":
        {
            "modelo":"Alpha a7 III",
            "garantia":"2 años",
            "tamaño_pantalla":"3 pulgadas",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c80",
    "0nombre":"iPad Pro",
    "empresa":"Apple",
    "categoria":"tabletas",
    "precio":"799.99",
    "descripcion":"La tablet profesional con potencia y versatilidad.",
    "especificaciones":
        {
            "modelo":"iPad Pro",
            "garantia":"1 año",
            "red":"Wi-Fi / 5G",
            "tamaño_pantalla":"12.9 pulgadas",
            "memoria_ram":"8 GB"
            },
    "colores":
    ["Plata","Gris Espacial"]
},
    {"_id":"64e6e9aa555ec58b6caa5c81",
    "0nombre":"Samsung Galaxy Tab S7",
    "empresa":"Samsung",
    "categoria":"tabletas",
    "precio":"649.99",
    "descripcion":"Una tablet premium con stylus para productividad y entretenimiento.",
    "especificaciones":
        {
            "modelo":"Galaxy Tab S7",
            "garantia":"2 años",
            "red":"Wi-Fi / 5G",
            "tamaño_pantalla":"11 pulgadas",
            "memoria_ram":"6 GB"
            },
    "colores":
    ["Bronce","Negro","Plateado"]
},
    {"_id":"64e6e9aa555ec58b6caa5c82",
    "nombre":"Bose QuietComfort 35 II",
    "empresa":"Bose",
    "categoria":"auriculares",
    "precio":"299.99",
    "descripcion":"Auriculares con cancelación de ruido para una experiencia auditiva inmersiva.",
    "especificaciones":
        {
            "modelo":"QuietComfort 35 II",
            "garantia":"1 año",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro","Plata","Azul"]
},
    {"_id":"64e6e9aa555ec58b6caa5c83",
    "nombre":"Sony WH-1000XM4",
    "0empresa":"Sony",
    "categoria":"auriculares",
    "precio":"349.99",
    "descripcion":"Auriculares premium con cancelación de ruido y excelente calidad de sonido.",
    "especificaciones":
        {
            "modelo":"WH-1000XM4",
            "garantia":"2 años",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro","Plata"]
},
    {"_id":"64e6e9aa555ec58b6caa5c84",
    "nombre":"Logitech MX Master 3",
    "empresa":"Logitech",
    "categoria":"periféricos",
    "0precio":"99.99",
    "descripcion":"Un ratón ergonómico avanzado para usuarios profesionales y creativos.",
    "especificaciones":
        {
            "modelo":"MX Master 3",
            "garantia":"1 año",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Gris","Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c85",
    "nombre":"Canon EOS 5D Mark IV",
    "empresa":"Canon",
    "categoria":"cámaras de fotografía",
    "0precio":"2499.99",
    "descripcion":"Cámara DSLR de alto rendimiento para fotógrafos exigentes.",
    "especificaciones":
        {
            "modelo":"EOS 5D Mark IV",
            "garantia":"2 años",
            "tamaño_pantalla":"3.2 pulgadas",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c86",
    "nombre":"Dell XPS 13",
    "empresa":"Dell",
    "0categoria":"computadoras",
    "precio":"1199.99",
    "descripcion":"Laptop ultradelgada y potente para usuarios profesionales y creativos.",
    "especificaciones":
        {
            "modelo":"XPS 13",
            "garantia":"1 año",
            "red":"Wi-Fi 6",
            "tamaño_pantalla":"13.4 pulgadas",
            "memoria_ram":"16 GB"
            },
    "colores":
    ["Plata","Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c87",
    "0nombre":"GoPro HERO9 Black",
    "empresa":"GoPro",
    "categoria":"cámaras de video",
    "precio":"449.99",
    "descripcion":"Cámara de acción para capturar momentos emocionantes en alta calidad.",
    "especificaciones":
        {
            "modelo":"HERO9 Black",
            "garantia":"1 año",
            "tamaño_pantalla":"2.27 pulgadas",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c88",
    "0nombre":"Nikon Z6",
    "empresa":"Nikon",
    "categoria":"cámaras de fotografía",
    "precio":"1799.99",
    "descripcion":"Cámara mirrorless con excelentes capacidades de captura en baja luz.",
    "especificaciones":
        {
            "modelo":"Z6",
            "garantia":"2 años",
            "tamaño_pantalla":"3.2 pulgadas",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c89",
    "nombre":"AirPods Pro",
    "0empresa":"Apple",
    "categoria":"auriculares",
    "precio":"249.99",
    "descripcion":"Auriculares inalámbricos con cancelación de ruido para una experiencia de audio excepcional.",
    "especificaciones":
        {
            "modelo":"AirPods Pro",
            "garantia":"1 año",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Blanco"]
},
    {"_id":"64e6e9aa555ec58b6caa5c8a",
    "nombre":"Samsung Galaxy Buds Pro",
    "empresa":"Samsung",
    "0categoria":"auriculares",
    "precio":"199.99",
    "descripcion":"Auriculares inalámbricos con calidad de sonido excepcional y cancelación de ruido.",
    "especificaciones":
        {
            "modelo":"Galaxy Buds Pro",
            "garantia":"2 años",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro","Plateado","Violeta"]
},
    {"_id":"64e6e9aa555ec58b6caa5c8b",
    "nombre":"Microsoft Surface Pro 7",
    "empresa":"Microsoft",
    "categoria":"tabletas",
    "0precio":"799.99",
    "descripcion":"Tablet 2 en 1 versátil con Windows para productividad y entretenimiento.",
    "especificaciones":
        {
            "modelo":"Surface Pro 7",
            "garantia":"1 año",
            "red":"Wi-Fi",
            "tamaño_pantalla":"12.3 pulgadas",
            "memoria_ram":"16 GB"
            },
    "colores":
    ["Platino","Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c8c",
    "nombre":"Sony Xperia 1 III",
    "0empresa":"Sony",
    "categoria":"teléfonos",
    "precio":"1099.99",
    "descripcion":"Teléfono con pantalla 4K y cámara avanzada para amantes de la fotografía y el entretenimiento.",
    "especificaciones":
        {
            "modelo":"Xperia 1 III",
            "garantia":"2 años",
            "red":"5G",
            "tamaño_pantalla":"6.5 pulgadas",
            "memoria_ram":"12 GB"
            },
    "colores":
    ["Negro","Plata"]
},
    {"_id":"64e6e9aa555ec58b6caa5c8d",
    "nombre":"Logitech G Pro X",
    "empresa":"Logitech",
    "categoria":"periféricos",
    "precio":"129.99",
    "descripcion":"Audífonos para juegos con sonido de alta calidad y micrófono intercambiable.",
    "especificaciones":
        {
            "modelo":"G Pro X",
            "garantia":"1 año",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c8e",
    "nombre":"Canon EOS R5",
    "0empresa":"Canon",
    "categoria":"cámaras de video",
    "precio":"3799.99",
    "descripcion":"Cámara mirrorless con capacidades de grabación de video 8K y fotografía de alta resolución.",
    "especificaciones":
        {
            "modelo":"EOS R5",
            "garantia":"2 años",
            "tamaño_pantalla":"3.2 pulgadas",
            "memoria_ram":"No aplica"
            },
    "colores":
    ["Negro"]
},
    {"_id":"64e6e9aa555ec58b6caa5c8f",
    "nombre":"Dell Alienware m15",
    "empresa":"Dell",
    "0categoria":"computadoras",
    "precio":"1799.99",
    "descripcion":"Laptop gaming de alto rendimiento con gráficos potentes y diseño llamativo.",
    "especificaciones":
        {
            "modelo":"Alienware m15",
            "garantia":"1 año",
            "red":"Wi-Fi 6",
            "tamaño_pantalla":"15.6 pulgadas",
            "memoria_ram":"32 GB"
            },
    "colores":
    ["Negro"]
}
];

export const obtenerProductos = (req: Request, res: Response) => {
    res.json({ productos });
};

export const obtenerProductoPorId = (req: Request, res: Response) => {
    const idProducto = req.params.id;
    const producto = productos.find((prod) => prod._id === idProducto);
    if (producto) {
        res.json({ producto });
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};
