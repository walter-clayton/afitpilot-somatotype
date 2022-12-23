import { Schema, model } from "mongoose";
import { IComparison } from "../interfaces/interfaces";

const comparisonSchema: Schema = new Schema<IComparison>({
  group: { type: String, required: true },
  gender: { type: String, required: true },
  name: { type: String, required: true },
  endo: { type: Number, required: true },
  meso: { type: Number, required: true },
  ecto: { type: Number, required: true },
});

module.exports = model<IComparison>("Comparison", comparisonSchema);
