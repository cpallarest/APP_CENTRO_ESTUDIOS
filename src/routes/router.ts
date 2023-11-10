import  Express from "express";
import { saveSchool, findSchools, findSchoolsWithId } from "../controllers/school_controller.js";
//import { saveSubject } from "../controllers/subject_controller.js";

const router: Express.Router = Express.Router();


router.post("/schools", saveSchool);
router.get("/schools", findSchools)
router.get("/schools/:id", findSchoolsWithId)
router.delete("/schools/")
//router.post("/subject", saveSubject);

export {router};