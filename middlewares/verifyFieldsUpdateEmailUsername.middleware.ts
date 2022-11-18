import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

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
 *
 * @param username String
 * @returns Boolean
 */
const isUsernameValid = (username: any): boolean => {
  const isValid: boolean = username.match(/^[a-zA-Z0-9]+$/) !== null;

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
  if (!isEmailValid(req.query.email))
    return res.status(403).send({
      message: "Invalid email.",
    });

  if (!isUsernameValid(req.query.username))
    return res.status(403).send({
      message: "Invalid username.",
    });

  try {
    const user = await User.findById(req.user_id);
    req.user = {email: user.email, username: user.username}

    if (user.email === req.query.email && user.username === req.query.username)
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
