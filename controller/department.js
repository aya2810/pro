import department from "../models/department.js";

export const all= async (req,res) => {
    const departments = await department.find({}, {name: 1}).lean();

    
    res.render('departments/all', { departments })
};

export const create = (req,res) => {
    res.render('departments/create');
};

export const store = async (req,res) => {
    const { name , code } = req.body;

    await department.create({
        name,
        code,
    });
    res.redirect('/departments')
};

export const show = async (req,res) => {
    // 1- Grab the _id
    const { _id } = req.params;
    console.log(_id);

    //2- Use _id to get department
    const singledepartment = await department.findById(_id).lean();

    //3- Render show templets
    res.render('departments/show', { department:singledepartment });
};