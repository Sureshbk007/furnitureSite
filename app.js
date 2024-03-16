import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import globalError from "./controllers/globalError.controller.js";
import ApiError from "./utils/ApiError.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import categoryRouter from "./routes/category.route.js";
import cartRouter from "./routes/cart.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16KB" }));
app.use(cookieParser({ limit: "16KB" }));
app.use(cors());

// routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/cart", cartRouter);
app.all("*", (req, res, next) => {
  next(new ApiError(404, "fail", "Page not found"));
});
app.use(globalError);

export default app;
