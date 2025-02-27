import mongoose from "mongoose";
import { Schema } from "mongoose";

const shiftSchema = new Schema({
//   userId: {
//     type: Schema.Types.ObjectId,
//     ref: "Employee",
//     required: false,
//     },
    date: {
    type: Date,
    required: true,
    },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

const Shift = mongoose.model("Shift", shiftSchema);
export default Shift;
