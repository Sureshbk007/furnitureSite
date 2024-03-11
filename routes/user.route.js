import express from "express";
import { login, logout, signup } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

//secure routes
router.post("/logout", auth, logout);
export default router;
