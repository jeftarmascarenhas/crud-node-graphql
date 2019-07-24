import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  title: { type: String, required: true },
  qty: { type: Number }
});

export default model("product", ProductSchema);
