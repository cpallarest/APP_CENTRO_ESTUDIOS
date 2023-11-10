import Express from 'express';
import { db } from '../config.js';
 
export function saveSchool(req: Express.Request, res: Express.Response):void {
 const queryString: string = `INSERT INTO School(name) VALUES ("${req.body.name}")`;
 db.query(queryString, (error, result) => {
 if(error){
 res.send("No se pudo hacel el insert"); 
 }
 res.send("El insert se hizo con éxito");
 });
}