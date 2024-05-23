import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param password String
 * @returns Boolean
 */
const isRequired = (password: string): boolean => {
  return !password || password === "";
};

/**
 * password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number
 * @param pwd String
 * @returns Boolean
 */
const isPasswordValid = (pwd: string): boolean => {
  const isValid: boolean =
    pwd.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
    null;
  return isValid;
};

/**
 * Middleware
 */
const isFieldsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { password }: any = req.body;

  if (isRequired(password))
    return res.status(403).send({
      message: "Password is required.",
    });

  if (!isPasswordValid(password))
    return res.status(403).send({
      message:
        "Invalid password: password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number.",
    });

  next();
};

module.exports = isFieldsValid;
