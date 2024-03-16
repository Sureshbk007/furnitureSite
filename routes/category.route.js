import express from "express";
import { createCategory } from "../controllers/category.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = express.Router();

router.route("/").post(upload.single("catImg"), createCategory);

export default router;
