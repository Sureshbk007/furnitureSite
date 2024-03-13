import { Product } from "../models/product.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

// Insert product
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
    variants,
    images,
  });
  res.status(200).json(new ApiResponse(200, "success", product));
});

// Get all products
const getAllProducts = asyncHandler(async (req, res) => {
  const productList = await Product.find();
  res.status(200).json(new ApiResponse(200, "success", productList));
});

//Get single product
const getProduct = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const product = await Product.findOne({ _id });
  res.status(200).json(new ApiResponse(200, "success", product));
});

// Delete a product
const deleteProduct = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const deletedProduct = await Product.findByIdAndDelete({ _id });
  res.status(200).json(new ApiResponse(200, "success", deletedProduct));
});

//Update a product
const updateProduct = asyncHandler(async (req, res) => {
  const _id = req.params.id;
  const updatedProduct = await Product.findByIdAndUpdate({ _id }, req.body, {
    new: true,
  });
  res.status(200).json(new ApiResponse(200, "success", updatedProduct));
});

//Search products
const searchProducts = asyncHandler(async (req, res) => {
  const searchTerm = req.query.q;
  const searchedProducts = await Product.find({ name: searchTerm });
  res.status(200).json(new ApiResponse(200, "success", searchedProducts));
});
export {
  getAllProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  searchProducts,
};
