import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import connectMongoDB from "./db/index.js";

connectMongoDB(process.env.MONGODB_URI)
  .then((data) => {
    console.log("Database Connected! Host: ", data.connection.host);

    app.listen(process.env.PORT || 9500, () => {
      console.log("Server started on port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error: ", err.message);
  });
