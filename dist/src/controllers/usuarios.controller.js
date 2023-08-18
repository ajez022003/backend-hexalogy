"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgregarCancionesPlaylist = exports.login = exports.obtenerNombresUsuarios = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
//(controlador usuarios)mostrar los elementos de usuarios en la ventana modal
const obtenerNombresUsuarios = (req, res) => {
};
exports.obtenerNombresUsuarios = obtenerNombresUsuarios;
//(controlador usuario)mostrar las listas de playlist de cada usuario
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuario = yield usuario_schema_1.usuarioSchema.findOne({ correo: req.params.correo, contrasena: req.params.contrasena }, { contrasena: false });
    if (usuario) {
        res.send({ status: true, message: 'login correcto', usuario });
    }
    else {
        res.send({ status: false, message: 'login incorrecto' });
    }
    res.end();
});
exports.login = login;
//*(controlador usuaeios)*agregar caciones de artistas a la lista de playlist del usuario*
const AgregarCancionesPlaylist = (req, res) => {
    res.send("agregar canciones a la playlist");
    res.end();
};
exports.AgregarCancionesPlaylist = AgregarCancionesPlaylist;
