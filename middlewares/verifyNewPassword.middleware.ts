import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param password String
 * @returns Boolean
 */
const isRequired = (
  newPassword: string,
  confirmNewPassword: string
): boolean => {
  return (
    !newPassword ||
    newPassword === "" ||
    !confirmNewPassword ||
    confirmNewPassword === ""
  );
};

/**
 * password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number
 * @param pwd String
 * @returns Boolean
 */
const isPasswordValid = (
  newPassword: string,
  confirmNewPassword: string
): boolean => {
  const isValid: boolean =
    newPassword.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    ) !== null &&
    confirmNewPassword.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    ) !== null;
  return isValid;
};

const matchPasswords = (
  newPassword: string,
  confirmNewPassword: string
): boolean => {
  return newPassword === confirmNewPassword;
};

/**
 * Middleware
 */
const isFieldsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { newPassword, confirmNewPassword }: any = req.body;

  if (isRequired(newPassword, confirmNewPassword))
    return res.status(403).send({
      message: "newPassword and confirmNewPassword are required.",
    });

  if (!isPasswordValid(newPassword, confirmNewPassword))
    return res.status(403).send({
      message:
        "Invalid password: password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number.",
    });

  if (!matchPasswords(newPassword, confirmNewPassword))
    return res.status(403).send({
      message: "Passwords don't match.",
    });

  next();
};

module.exports = isFieldsValid;
