import mongoose from "mongoose";

export const dbConnection = mongoose
  .connect("mongodb://localhost:27017/Sara7a")
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log("canot connect");
  });
