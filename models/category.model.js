import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
  },
  { timestamps: true }
);

export const Category = mongoose.model("Category", categorySchema);
