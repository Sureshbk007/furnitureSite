import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  searchProducts,
  updateProduct,
} from "../controllers/product.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/search").get(searchProducts);
router
  .route("/")
  .get(getAllProducts)
  .post(
    auth,
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
router
  .route("/:id")
  .get(getProduct)
  .patch(auth, updateProduct)
  .delete(auth, deleteProduct);

export default router;
