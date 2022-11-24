import { Schema, Model, model, ObjectId } from "mongoose";
import { ISomatotype } from "../interfaces/interfaces";

const somatotypeSchema: Schema = new Schema<ISomatotype>({
  endomorphy: { type: Number, required: true },
  mesomorphy: { type: Number, required: true },
  ectomorphy: { type: Number, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  anthropometric: { type: Schema.Types.ObjectId, ref: "Anthropometric" },
  createdAtt: { type: String, default: new Date().toLocaleString() },
  updatedAt: { type: String, default: new Date().toLocaleString() },
});

module.exports = model<ISomatotype>("Somatotype", somatotypeSchema);
