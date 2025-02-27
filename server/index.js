import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import departmentRouter from './routes/department.js';
import employeeRouter from './routes/employee.js';
import leaveRouter from './routes/leave.js';
import shiftRouter from './routes/shifts.js';
import connectToDatabase from './db/db.js';

dotenv.config();

connectToDatabase();
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static('public/uploads'));
app.use('/api/auth', authRouter);
app.use('/api/department', departmentRouter);
app.use('/api/employee', employeeRouter);
app.use('/api/leave', leaveRouter);
app.use('/api/shifts', shiftRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

