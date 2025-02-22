import express from "express"
import {verifyToken} from "../Middlewares/verifyToken.js";
import { createTask, deleteTask, getTask } from "../Controllers/Task.js";
const router = express.Router();


router.post("/", verifyToken, createTask)

router.get("/", getTask)

router.delete("/", verifyToken, deleteTask)

export default router