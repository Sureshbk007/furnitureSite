import express from "express";
import { login, logout, signup } from "../controllers/user.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

//secure routes
router.route("/logout").post(auth, logout);

export default router;
