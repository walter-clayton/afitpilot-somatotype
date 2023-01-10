import { NextFunction, Request, Response } from "express";
import { IAnthropometric, ISomatotype } from "../interfaces/interfaces";
const User = require("../models/User");

/**
 *
 * @param somatotype ISomatotype
 * @returns Boolean
 */
const isRequired = (
  somatotype: ISomatotype,
  anthropometric: IAnthropometric
): boolean => {
  return !somatotype || !anthropometric;
};

/**
 * Middleware
 */
const isFieldsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { data } = req.body;

  if (isRequired(data.somatotype, data.anthropometric))
    return res.status(403).send({
      message: "somatotype and anthropometric are required.",
    });

  next();
};

module.exports = isFieldsValid;
