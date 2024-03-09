import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16KB" }));
app.use(cookieParser({ limit: "16KB" }));
app.use(cors({ origin: process.env.CORS_ORIGIN }));

// routes
app.use("/api/v1/user", userRouter);
export default app;
