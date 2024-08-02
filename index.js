import express from "express"
import cors from "cors"
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./Routes/Auth.js"
import taskRoute from "./Routes/Task.js"
import cookieParser from "cookie-parser";
import userRoute from "./Routes/User.js"



const app = express();
dotenv.config();

const corsOptions = {
    origin: "https://trello-frontend-next.vercel.app", 
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type,Authorization",
};
  
mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>console.log("Mongo DB Connected"))
    .catch((err)=>{console.log(err);})

app.use(cookieParser());
app.use(express.json());
app.use(cors(corsOptions));

// Endpoints
app.use("/api/auth", authRoute);
app.use("/api/tasks", taskRoute);
app.use("/api/users", userRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend Server Running")
})