import { Cart } from "../models/cart.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

// Add to cart
const addToCart = asyncHandler(async (req, res) => {
  const cart = await Cart.create(req.body);

  res.status(200).json(new ApiResponse(200, "success", cart));
});

const getCartItems = asyncHandler(async (req, res) => {
  const cartItems = await Cart.find();
  res.status(200).json(new ApiResponse(200, "success", cartItems));
});
export { addToCart, getCartItems };
