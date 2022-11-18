import { Schema, Model, model, ObjectId } from "mongoose";
import { IUser } from "../interfaces/interfaces";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema: Schema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    somatotypes: [{ type: Schema.Types.ObjectId, ref: "Somatotype" }],
    anthropometrics: [{ type: Schema.Types.ObjectId, ref: "Anthropometric" }],
  },
  { timestamps: true }
);

userSchema.methods.generateAuthToken = function (): string {
  const token = jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "3600s",
  });

  return token;
};

userSchema.methods.generatePassword = (): string => {
  var pass = "";
  var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= 8; i++) {
    var randomIndex = Math.floor(Math.random() * str.length);

    pass += str.charAt(randomIndex);
  }

  return pass;
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

module.exports = model<IUser>("User", userSchema);
