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
  return (
    !reqBody.username ||
    !reqBody.password ||
    reqBody.username === "" ||
    reqBody.password === ""
  );
};

/**
 * Middleware
 */
const isFieldsValid = (
  req: Request,
  res: Response,
  next: NextFunction
): express.Response<any, Record<string, any>> | undefined => {
  if (isRequired(req.body))
    return res.status(403).send({
      message: "Username and password are required.",
    });

  next();
};

module.exports = isFieldsValid;
