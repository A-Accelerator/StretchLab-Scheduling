import mongoose from "mongoose";
import { Schema } from "mongoose";


const employeeSchema = new Schema({

    userId: {type: Schema.Types.ObjectId, ref: "User, required: true"}
})