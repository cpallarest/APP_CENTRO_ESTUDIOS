import Express from "express";
import { db } from "../config.js";

export function saveSubject(req: Express.Request, res: Express.Response): void{
    res.send(req.body);
}