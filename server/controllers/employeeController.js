import Employee from "../models/Employee.js"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import multer from "multer"
import path from "path"
import Department from '../models/Department.js'

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

        const user = await User.findOne({email})

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


const getEmployees = async (req, res) => {
    try {
      const employees = await Employee.find().populate('userId', {password: 0}).populate('department');
      return res.status(200).json({ success: true, employees });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error: "get employees server error" });
    }
}

const getEmployee = async (req, res) => {

  const { id } = req.params;
  try {
    const employee = await Employee.findById({ _id: id })
      .populate("userId", { password: 0 })
      .populate("department");
    return res.status(200).json({ success: true, employee });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "get employees server error" });
  }
};

const updateEmployee = async (req, res) => {
    try {

        const { id } = req.params;

         const {
          name,
          email,
          designation,
          department,
          salary
         } = req.body;
        
        const employee = await Employee.findById({ _id: id })
        
        if (!employee) {
            return res.status(404).json({success: false, error: "employee not found"})
        }

        const user = await User.findById({ _id: employee.userId })
        
        if (!user) {
            return res
              .status(404)
              .json({ success: false, error: "User not found" });
        }

        const updateUser = await User.findByIdAndUpdate({ _id: employee.userId }, { name, email })
        const updateEmployee = await Employee.findByIdAndUpdate({ _id: id }, { designation, department, salary })

        if (!updateUser || !updateEmployee) {

            return res
              .status(404)
              .json({ success: false, error: "document not found" });
            
        }

        return res.status(200).json({ success: true, message: "employee Updated" });
        
    } catch (error) {
        return res
          .status(500)
          .json({ success: false, error: "update employee server error" });
    }
}

export {addEmployee, upload, getEmployees, getEmployee, updateEmployee}