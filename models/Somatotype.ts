import { Schema, Model, model, ObjectId } from "mongoose";
import { ISomatotype } from "../interfaces/interfaces";

const somatotypeSchema: Schema = new Schema<ISomatotype>(
  {
    endomorph: { type: Number, required: true },
    mesomorph: { type: Number, required: true },
    ectomorph: { type: Number, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    anthropometric: [{ type: Schema.Types.ObjectId, ref: "Anthropometric" }],
  },
  { timestamps: true }
);

module.exports = model<ISomatotype>("Somatotype", somatotypeSchema);
