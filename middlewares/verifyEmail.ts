import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param reqBody IReqBody
 * @returns Boolean
 */
const isRequired = (email: string): boolean => {
  return !email || email === "";
};

/**
 *
 * @param email String
 * @returns Boolean
 */
const isEmailValid = (email: any): boolean => {
  const isValid: boolean =
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;

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
  if (isRequired(req.body.email))
    return res.status(403).send({
      message: "Email is required.",
    });

  if (!isEmailValid(req.body.email))
    return res.status(403).send({
      message: "Invalid email.",
    });

  try {
    const user = await User.findById(req.user_id);

    if (!user) {
      return res.status(403).send({
        message: "Account doesn't exist",
      });
    } else {
      if (user.email === req.body.email)
        return res.status(403).send({
          message: "Nothing to update",
        });
      next();
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

module.exports = isFieldsValid;
