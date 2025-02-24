import Employee from "../models/Employee.js"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import multer from "multer"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})

const addEmployee = async (req, res) => {
    try{
        const {
            name, 
            email,
            employeeId,
            dob,
            gender,
            designation,
            department,
            salary,
            password,
            role,
        } = req.body;
        console.log("req.body:", req.body);
        console.log("test0")
        const user = await User.findOne({email})
        console.log("test1756")
        // if (user){
        //     console.log("test2345678")
        //     return res.status(400).json({message: "User already exists"})
        // }
        console.log("test1")
        const hashPassword = await bcrypt.hash(password, 10)
        console.log("test2")
        const newUser = new User({
            name: name, 
            email, 
            password: hashPassword,
            role,
            profileImage: req.file ? req.file.filename : "",
        })
        const savedUser = await newUser.save()
        console.log("newUser:", newUser);
        const newEmployee = new Employee({
            userId: savedUser._id,
            name: name,
            employeeId,
            dob,
            gender,
            designation,
            department,
            salary,
            email,
            password,
            role 
        })
        console.log("test4")
        console.log("employee", newEmployee);

        await newEmployee.save()
        console.log("Employee saved:", newEmployee);
        return res.status(200).json({ success: true, message: "Employee Created" });

    } catch (error){
        console.log("Error saving employee:", error);
        return res.status(500).json({ success: false, error: "Server error when adding employee" });
    }
}

export {addEmployee, upload}