import asyncHandler from "../utils/asyncHandler.js";
import { Category } from "../models/category.model.js";
import ApiResponse from "../utils/ApiResponse.js";

// create category
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const category = await Category.create({
    name,
  });
  res.status(200).json(new ApiResponse(200, "success", category));
});

export { createCategory };
