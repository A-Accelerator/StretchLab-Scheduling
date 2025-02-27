import Shift from "../models/Shift.js";
import Employee from "../models/Employee.js";

const addShift = async (req, res) => {
  console.log(req.body);
  try {
    const { date, startTime, endTime, location, notes } = req.body;
    const newShift = new Shift({
      date: new Date(date),
      startTime: new Date(`${date}T${startTime}:00.000Z`),
      endTime: new Date(`${date}T${endTime}:00.000Z`),
      location,
      notes,
    });
    await newShift.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.log("adding shift: ", error);
    return res
      .status(500)
      .json({ success: false, error: "service side error when adding Shift" });
  }
};

export { addShift };
