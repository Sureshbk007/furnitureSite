import express from "express";
import { login, signup } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

//secure routes
router.post("/logout", secureRoute, logout);
export default router;
