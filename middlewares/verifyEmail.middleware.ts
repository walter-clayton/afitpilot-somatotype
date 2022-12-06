import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param email String
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
  const { email } =
    req.url.split("?")[0] === "/deleteUser" ? req.query : req.body;

  if (isRequired(email))
    return res.status(403).send({
      message: "Email is required.",
    });

  if (!isEmailValid(email))
    return res.status(403).send({
      message: "Invalid email.",
    });

  req.body.email && (req.body.email = req.body.email.toLowerCase());

  next();
};

module.exports = isFieldsValid;
