import mongoose from "mongoose";

function connectMongoDB(url, databaseName) {
  return mongoose.connect(`${url}/${databaseName}`);
}
export default connectMongoDB;
