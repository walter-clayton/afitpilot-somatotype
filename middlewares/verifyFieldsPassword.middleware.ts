import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param reqBody IReqBody
 * @returns Boolean
 */
const isRequired = (reqParams: any): boolean => {
  return (
    !reqParams.newPassword ||
    !reqParams.confirmNewPassword ||
    reqParams.newPassword === "" ||
    reqParams.confirmNewPassword === ""
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
  const { newPassword, confirmNewPassword }: any = req.query;

  if (isRequired(req.query))
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

  try {
    const user = await User.findById(req.user_id);

    const matchPassword = await user.matchPassword(newPassword);

    if (matchPassword)
      return res.status(403).send({
        message: "Nothing to update",
      });

    next();
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

module.exports = isFieldsValid;
