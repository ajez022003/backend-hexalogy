import { Request, Response } from "express";
import { usuarioSchema } from "../models/usuario.schema";
import mongoose from "mongoose";

//conseguir la lista de usuarios
export const obtenerUsuarios=(req: Request, res: Response)=>{
    usuarioSchema.find()
		.then((result) => {
			res.send({result});
			res.end();
		})
		.catch((error) => {
            res.send(error);
			res.end();
    });
}
// conseguir la lista de usuarios
export const Login = (req: Request, res: Response) => {
	usuarioSchema.findById({ _id: req.params.id })
		.then((result) => {
			res.send(result);
			res.end();
		})
		.catch((error) => console.error(error));
};

export const addUser = (req: Request, res: Response) => {
	console.log(req.body.params);
	
	const p = new usuarioSchema({
		_id: new mongoose.Types.ObjectId(req.body.id),
		nombre: req.body.nombre,
		contrasenia: req.body.contrasenia,
		correo: req.body.correo,
		telefono: req.body.telefono
	});
  p.save().then((saveResponse:any) => {
    res.send(saveResponse);
	console.log(res);
    res.end();
  }).catch((error:any) => {
    res.send({message: 'Hubo un error al guardar', error}); // shorthand
    res.end();
  });
  // aqui xd
};