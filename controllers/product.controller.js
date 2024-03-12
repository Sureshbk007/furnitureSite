import { Product } from "../models/product.model.js";
import { Category } from "../models/category.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const productList = await Product.find();
  res.status(200).json(new ApiResponse(200, "success", productList));
});

// insert product
const createProduct = asyncHandler(async (req, res) => {
  const { name, description, category, variants } = req.body;

  const images = [];
  for (let image in req.files) {
    let imagePath = req.files[image][0].path;
    images.push(imagePath);
  }

  const product = await Product.create({
    name,
    description,
    category,
    variants: [
      {
        size: "M",
        inventory: 5,
        price: variants,
        material: "wood",
        color: "red",
      },
    ],
    images,
  });
  res.status(200).json(new ApiResponse(200, "success", product));
});

// create category
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = await Category.create({
    name,
  });
  res.status(200).json(new ApiResponse(200, "success", category));
});

export { getAllProducts, createProduct, createCategory };
