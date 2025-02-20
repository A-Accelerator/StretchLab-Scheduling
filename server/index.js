import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js';

dotenv.config();

connectToDatabase();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api/auth', authRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

