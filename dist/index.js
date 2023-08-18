"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_router_1 = __importDefault(require("./src/routers/usuarios.router"));
const database_1 = require("./src/utils/database");
const app = (0, express_1.default)();
const db = new database_1.Database();
app.use(express_1.default.json());
app.use('/usuarios', usuarios_router_1.default);
app.get("/", (req, res) => {
    res.send("Servidor para el ejercicio de spotify levantado");
    res.end();
});
app.listen(2000, () => {
    console.log("Servidor levantado en el puerto 3000");
});
