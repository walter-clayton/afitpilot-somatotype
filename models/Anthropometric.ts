import { Schema, Model, model, ObjectId } from "mongoose";
import { IAnthropometric, ISomatotype } from "../interfaces/interfaces";

const anthropometricSchema: Schema = new Schema<IAnthropometric>(
  {
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    supraspinal_skinfold: { type: Number, required: true },
    subscapular_skinfold: { type: Number, required: true },
    tricep_skinfold: { type: Number, required: true },
    femur_breadth: { type: Number, required: true },
    humerus_breadth: { type: Number, required: true },
    calf_girth: { type: Number, required: true },
    bicep_girth: { type: Number, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
    somatotype: [{ type: Schema.Types.ObjectId, ref: "Somatotype" }],
  },
  { timestamps: true }
);

module.exports = model<ISomatotype>("Anthropometric", anthropometricSchema);
