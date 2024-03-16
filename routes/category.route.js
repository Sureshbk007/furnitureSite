import express from "express";
import {
  createCategory,
  getCategory,
} from "../controllers/category.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { auth } from "../middlewares/auth.middleware.js";
const router = express.Router();

router
  .route("/")
  .post(auth, upload.single("catImg"), createCategory)
  .get(getCategory);

export default router;
