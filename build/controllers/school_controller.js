import { db } from "../config.js";
export function saveSchool(req, res) {
    const queryString = `INSERT INTO School (name) VALUES("${req.body.name}")`;
    db.query(queryString, (error, result) => {
        if (error) {
            res.send("No se puede hacer el insert");
        }
        res.send("El insert se hizo con éxito");
    });
    //res.send(req.body);
}
