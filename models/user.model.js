import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Fullname is required"],
      maxLength: [30, "Fullname have to be less than 30 characters"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
    },
    contact: {
      type: Number,
      required: [true, "Contact is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      maxLength: [30, "Password have to be less than 30 characters"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
