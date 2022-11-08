import { Schema, Model, model, ObjectId } from "mongoose";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export interface IUser {
  _id: ObjectId
  email: string;
  username: string;
  password: string;
}

const userSchema: Schema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.methods.encryptPassword = async (
  password: string
): Promise<string> => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT!));
  return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (
  password: string
): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.findByEmail = function(email: string) {
  return this.find({email: email})
}

userSchema.statics.findByUsername = function(username: string) {
  return this.find({username: username})
}

module.exports = model<IUser>("User", userSchema);
