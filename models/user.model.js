import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      maxLength: 30,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      maxLength: 30,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (this.isModified("password"))
    this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordValid = function (plainTextPassword) {
  return bcrypt.compare(plainTextPassword, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return await jwt.sign(
    { _id: this._id, fullName: this.fullName },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "10d",
    }
  );
};
export const User = mongoose.model("User", userSchema);
