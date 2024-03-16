import express from "express";
import { auth } from "../middlewares/auth.middleware.js";
import { addToCart, getCartItems } from "../controllers/cart.controller.js";

const router = express.Router();

router.route("/").post(auth, addToCart).get(auth, getCartItems);

export default router;
