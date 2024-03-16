import asyncHandler from "../utils/asyncHandler.js";
import { Category } from "../models/category.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// create category
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const localFilePath = req.file.path;
  const cloudImg = await uploadOnCloudinary(localFilePath);
  const category = await Category.create({
    name,
    image: cloudImg.url,
  });
  res.status(200).json(new ApiResponse(200, "success", category));
});

//Get category
const getCategory = asyncHandler(async (req, res) => {
  const category = await Category.find();
  res.status(200).json(new ApiResponse(200, "success", category));
});
export { createCategory, getCategory };
