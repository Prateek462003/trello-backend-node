import express from "express"
import verifyToken from "../Middlewares/verifyToken";
const router = express.Router();


router.get("/", verifyToken, getAllActivities)

export default router
