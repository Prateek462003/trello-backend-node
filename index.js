import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/Auth.js"
import taskRoute from "./Routes/Task.js"

const app = express();
dotenv.config();

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("Mongo DB Connected"))
    .catch((err)=>{console.log(err);})

app.use(express.json());
app.use(cors());

// Endpoints
app.use("/api/auth", authRoute);
app.use("/api/task", taskRoute);


app.listen(5000, ()=>{
    console.log("Backend Server Running")
})