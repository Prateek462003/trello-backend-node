import express from "express"
import {loginController, signupController, logoutController} from "../Controllers/Auth.js"
const router = express.Router();

// SignUp
router.post("/signup", signupController)

// Login
router.post("/login", loginController)

// Logout
router.post("/logout", logoutController)



export default router;