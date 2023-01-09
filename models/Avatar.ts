import { Schema, model } from "mongoose";
import { IAvatar } from "../interfaces/interfaces";

const avatarSchema: Schema = new Schema<IAvatar>({
  indexHair: { type: Number, required: true },
  indexColorHair: { type: Number, required: true },
  indexBeard: { type: Number, required: true },
  indexColorSkin: { type: Number, required: true },
  indexFace: { type: Number, required: true },
  titleSoma: { type: String, required: true },
  codeSoma: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  somatotype: { type: Schema.Types.ObjectId, ref: "Somatotype" },
  createdAt: { type: String, default: new Date().toLocaleString() },
  updatedAt: { type: String, default: new Date().toLocaleString() },
});

module.exports = model<IAvatar>("Avatar", avatarSchema);
