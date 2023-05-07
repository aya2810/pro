import { Router } from "express";
import department from "../models/department.js";
import subject from "../models/subject.js";

const router = new Router();

router.get('/', (req,res) => {
    res.render('subjects/all')
});

router.get('create_departments')

export default router;