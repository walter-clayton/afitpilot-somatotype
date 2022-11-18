import express, { NextFunction, Request, Response } from "express";

interface IReqBody {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

/**
 *
 * @param reqBody IReqBody
 * @returns Boolean
 */
const isRequired = (reqBody: IReqBody): boolean => {
  return !reqBody.email || reqBody.email === "";
};

/**
 *
 * @param email String
 * @returns Boolean
 */
const isEmailValid = (email: string): boolean => {
  const isValid: boolean =
    email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ) !== null;

  return isValid;
};

/**
 * Middleware
 */
const isFieldsValid = (
  req: Request,
  res: Response,
  next: NextFunction
): express.Response<any, Record<string, any>> | undefined => {
  const { email }: IReqBody = req.body;

  if (isRequired(req.body))
    return res.status(403).send({
      message: "Email is required on req.body.",
    });

  if (!isEmailValid(email))
    return res.status(403).send({
      message: "Invalid email.",
    });

  next();
};

module.exports = isFieldsValid;
