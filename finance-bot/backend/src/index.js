import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true 
}));

app.use(express.json());
app.use(cookieParser());

connectDB();


app.use('/api/auth', authRoutes);


app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
