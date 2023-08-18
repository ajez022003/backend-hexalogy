import mongoose from "mongoose";

export class Database {
  server:string = '127.0.0.1';
  port:string = '27017';
  db:string = 'hexalogy';

  constructor() {
    // Cadena de conexión
    mongoose.connect(`mongodb://${this.server}:${this.port}/${this.db}`)
    .then(()=>{
      console.log('Se conectó a Mongo');
    }).catch(() => {
      console.error('Ocurrió un error al conectarse');
    });
  }
}