"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.Login = exports.obtenerUsuarios = void 0;
const usuario_schema_1 = require("../models/usuario.schema");
const mongoose_1 = __importDefault(require("mongoose"));
//conseguir la lista de usuarios
const obtenerUsuarios = (req, res) => {
    usuario_schema_1.usuarioSchema.find()
        .then((result) => {
        res.send({ result });
        res.end();
    })
        .catch((error) => {
        res.send(error);
        res.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
// conseguir la lista de usuarios
const Login = (req, res) => {
    usuario_schema_1.usuarioSchema.findById({ _id: req.params.id })
        .then((result) => {
        res.send(result);
        res.end();
    })
        .catch((error) => console.error(error));
};
exports.Login = Login;
const addUser = (req, res) => {
    console.log(req.body.params);
    const p = new usuario_schema_1.usuarioSchema({
        _id: new mongoose_1.default.Types.ObjectId(req.body.id),
        nombre: req.body.nombre,
        contrasenia: req.body.contrasenia,
        correo: req.body.correo,
        telefono: req.body.telefono
    });
    p.save().then((saveResponse) => {
        res.send(saveResponse);
        console.log(res);
        res.end();
    }).catch((error) => {
        res.send({ message: 'Hubo un error al guardar', error }); // shorthand
        res.end();
    });
    // aqui xd
};
exports.addUser = addUser;
