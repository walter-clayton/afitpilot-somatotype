import { Schema, Model, model, ObjectId } from "mongoose";
import { IUser } from "../interfaces/interfaces";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema: Schema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    somatotypes: [{ type: Schema.Types.ObjectId, ref: "Somatotype" }],
    anthropometrics: [{ type: Schema.Types.ObjectId, ref: "Anthropometric" }],
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function (): string {
  const token = jwt.sign(
    { id: this._id },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "3600s",
    }
  );

  return token;
};

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

userSchema.statics.findByEmail = function (email: string) {
  return this.find({ email: email });
};

userSchema.statics.findByUsername = function (username: string) {
  return this.find({ username: username });
};


module.exports = model<IUser>("User", userSchema);
