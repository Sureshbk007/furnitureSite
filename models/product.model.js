import mongoose from "mongoose";
const productVariant = new mongoose.Schema({
  size: String,
  inventory: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
  },
  material: String,
  color: String,
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 255,
    },
    description: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    images: [String],
    variants: [productVariant],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
