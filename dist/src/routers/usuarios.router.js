"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_controller_1 = require("../controllers/usuarios.controller");
const router = express_1.default.Router();
//(controlador usuarios)mostrar los elementos de usuarios en la ventana modal
router.post('/login', usuarios_controller_1.login);
//(controlador usuario)mostrar las listas de playlist de cada usuario
// http://localhost:3000/usuarios/:id
//*(controlador usuarios)*agregar caciones de artistas a la lista de playlist del usuario*
// http://localhost:3000/usuarios/:id
router.put('/:id_usuario/playlist', usuarios_controller_1.AgregarCancionesPlaylist);
exports.default = router;
