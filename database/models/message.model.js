import { model, Schema } from "mongoose";

const schema = new Schema({
  name: String,
  user: String,
});

export const message = model("message", schema);
