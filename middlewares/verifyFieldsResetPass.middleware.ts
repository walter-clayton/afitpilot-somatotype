import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param reqBody IReqBody
 * @returns Boolean
 */
const isRequired = (reqBody: any): boolean => {
  return (
    !reqBody.newPassword ||
    !reqBody.confirmNewPassword ||
    reqBody.newPassword === "" ||
    reqBody.confirmNewPassword === ""
  );
};

/**
 *
 * @param pwd String
 * @param confirmPwd String
 * @returns boolean
 */
const matchPassword = (pwd: string, confirmPwd: string): boolean => {
  return pwd === confirmPwd;
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
  const { newPassword, confirmNewPassword }: any = req.body;

  if (isRequired(req.body))
    return res.status(403).send({
      message: "newPassword and confirmNewPassword are required.",
    });

  if (!matchPassword(newPassword, confirmNewPassword))
    return res.status(403).send({
      message: "mismatch password.",
    });

  if (!isPasswordValid(newPassword))
    return res.status(403).send({
      message:
        "Invalid password: password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number.",
    });

    next()
};

module.exports = isFieldsValid;
