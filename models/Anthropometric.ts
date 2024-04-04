import { Schema, model } from "mongoose";
import { IAnthropometric } from "../interfaces/interfaces";

const anthropometricSchema: Schema = new Schema<IAnthropometric>({
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  supraspinal_skinfold: { type: Number, required: true },
  subscapular_skinfold: { type: Number, required: true },
  tricep_skinfold: { type: Number, required: true },
  femur_breadth: { type: Number, required: true },
  humerus_breadth: { type: Number, required: true },
  calf_girth: { type: Number, required: true },
  bicep_girth: { type: Number, required: true },
  body_fat: { type: Number, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  somatotype: { type: Schema.Types.ObjectId, ref: "Somatotype" },
  createdAt: { type: String, default: new Date().toLocaleString() },
  updatedAt: { type: String, default: new Date().toLocaleString() },
});

module.exports = model<IAnthropometric>("Anthropometric", anthropometricSchema);
