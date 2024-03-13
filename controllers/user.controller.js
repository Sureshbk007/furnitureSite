import validate from "../utils/validate.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";

//generate access Token
const generateAccessToken = async (userId) => {
  const user = await User.findById(userId);
  const AccessToken = await user.generateAccessToken();
  return AccessToken;
};

// Sign up controller
const signup = asyncHandler(async (req, res) => {
  const error = validate("signup", req.body);
  if (error) throw new ApiError(400, "fail", error);

  const { email } = req.body;
  const existEmail = await User.findOne({ email });

  if (existEmail) throw new ApiError(400, "fail", "Email already exist");
  const user = await User.create(req.body);
  const createdUser = await User.findById(user._id).select("-password -__v");
  res.status(201).json(new ApiResponse(201, "success", createdUser));
});

// login controller
const login = asyncHandler(async (req, res) => {
  const error = validate("login", req.body);
  if (error) throw new ApiError(400, "fail", error);

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new ApiError(400, "fail", "User doesn't exist");
  const isPasswordValid = await user.isPasswordValid(password);
  if (!isPasswordValid) throw new ApiError(400, "fail", "Incorrect password");
  const accessToken = await generateAccessToken(user._id);
  const loggedUser = await User.findById(user._id).select("-password -__v");

  const options = {
    httpOnly: true,
    secure: true,
  };
  res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(new ApiResponse(200, "success", loggedUser));
});

// logout
const logout = (req, res) => {
  const options = {
    httpOnly: true,
    secure: true,
  };
  res
    .status(200)
    .clearCookie("accessToken", options)
    .json(new ApiResponse(200, "success", req.user));
};

export { signup, login, logout };
