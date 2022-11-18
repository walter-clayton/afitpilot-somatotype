import express, { NextFunction, Request, Response } from "express";

interface IReqParams {
  email: string;
  password: string;
}

/**
 *
 * @param reqBody IReqBody
 * @returns Boolean
 */
const isRequired = (reqParams: any): boolean => {
  return (
    !reqParams.email ||
    !reqParams.password ||
    reqParams.email === "" ||
    reqParams.password === ""
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
  
  if (isRequired(req.query))
    return res.status(403).send({
      message: "Email and password are required.",
    });

  next();
};

module.exports = isFieldsValid;
