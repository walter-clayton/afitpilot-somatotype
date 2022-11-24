import { NextFunction, Request, Response } from "express";
import { ISomatotype } from "../interfaces/interfaces";
const User = require("../models/User");

/**
 *
 * @param somatotype ISomatotype
 * @returns Boolean
 */
const isRequired = (somatotype: ISomatotype): boolean => {
  return !somatotype;
};

/**
 * Middleware
 */
const isFieldsValid = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response<any, Record<string, any>> | undefined> => {
  const { somatotype } = req.body;

  if (isRequired(somatotype))
    return res.status(403).send({
      message: "somatotype is required.",
    });

  next();
};

module.exports = isFieldsValid;
