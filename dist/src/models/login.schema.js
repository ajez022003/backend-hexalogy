"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    correo: String,
    contrasena: String,
    carrito: (Array)
});
exports.loginSchema = mongoose_1.default.model('login', schema);
