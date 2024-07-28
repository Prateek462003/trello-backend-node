import express from "express"
import {loginController, signupController, logoutController} from "../Controllers/Auth.js"
const router = express.Router();

// SignUp
router.post("/", signupController)

// Login
router.get("/login", loginController)

// Logout
router.get("/logout", logoutController)



export default router;