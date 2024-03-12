import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createCategory,
  createProduct,
  getAllProducts,
} from "../controllers/product.controller.js";
const router = express.Router();

router.route("/createCategory").post(createCategory);
router.route("/getAllProducts").get(getAllProducts);
router.route("/createProduct").post(
  upload.fields([
    {
      name: "productImg1",
      maxCount: 1,
    },
    {
      name: "productImg2",
      maxCount: 1,
    },
    {
      name: "productImg3",
      maxCount: 1,
    },
    {
      name: "productImg4",
      maxCount: 1,
    },
  ]),
  createProduct
);
export default router;
