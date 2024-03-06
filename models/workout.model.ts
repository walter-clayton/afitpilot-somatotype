import mongoose, { Schema, Document } from "mongoose";

export interface Workout extends Document {
  date: string;
  prescribedLoad: number;
  intendedRPE: number;
  actualRPE: number;
}

const WorkoutSchema: Schema = new Schema({
  date: { type: String, require: true },
  prescribedLoad: { type: Number, require: true },
  intendedRPE: { type: Number, require: true },
  actualRPE: { type: Number, require: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<Workout>("Workout", WorkoutSchema);
