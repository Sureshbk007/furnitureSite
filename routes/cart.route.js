import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { addToCart } from "../controllers/cart.controller.js";

const router = express.Router();
router.route("/").post(auth, addToCart);

export default router;
