import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param name String
 * @returns Boolean
 */
const isRequired = (name: string): boolean => {
  return !name || name === "";
};

/**
 *
 * @param name String
 * @returns Boolean
 */
const isNameValid = (name: string): boolean => {
  const isValid: boolean = name !== "" && /^[a-z\s]*$/.test(name);

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
  const { name } =
    req.url.split("?")[0] === "/deleteUser" ? req.query : req.body;

  if (isRequired(name))
    return res.status(403).send({
      message: "Name is required.",
    });

  if (!isNameValid(name))
    return res.status(403).send({
      message: "Invalid name (just letters).",
    });

  next();
};

module.exports = isFieldsValid;
