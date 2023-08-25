"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Database {
    constructor() {
        this.server = '127.0.0.1';
        this.port = '27017';
        this.db = 'hexalogy';
        // Cadena de conexión
        mongoose_1.default.connect('mongodb+srv://angellyjessibelelvir:vR8Rkr308L4CzbiF@cluster0.4mz52ku.mongodb.net/')
            .then(() => {
            console.log('Se conectó a Mongo');
        }).catch(() => {
            console.error('Ocurrió un error al conectarse');
        });
    }
}
exports.Database = Database;
