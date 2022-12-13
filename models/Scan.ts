import { Schema, model } from "mongoose";
import { IScan } from "../interfaces/interfaces";

const scanSchema: Schema = new Schema<IScan>({
  idScan: { type: String, required: true },
  file: { type: Buffer },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  gender: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: String, default: new Date().toLocaleString() },
  updatedAt: { type: String, default: new Date().toLocaleString() },
});

module.exports = model<IScan>("Scan", scanSchema);
