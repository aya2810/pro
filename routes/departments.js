import { Router } from "express";
// import department from "../models/department.js";
import { all, create, show, store } from "../controller/department.js";

const router =new Router();

router.get('/', all);
router.get('/create', create);
router.post('/', store);
router.get('/:_id', show);



// router.get('/create_departments', async (req,res) => {
//     await department.create({
//         name: 'Computer Science',
//         code: 'CSS',
//     });

//     res.send('Added');
// });

export default router;
