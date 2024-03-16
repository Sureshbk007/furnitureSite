import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: "sb-backend-cloud01",
  api_key: "769432272471491",
  api_secret: "9pfLZWIhrfHVDhNysLHx2SELqpI",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    console.log("i am cloud error");
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
