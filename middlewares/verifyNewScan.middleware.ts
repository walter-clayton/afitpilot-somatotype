import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

/**
 *
 * @param email String
 * @returns Boolean
 */
const isRequired = (age: number, weight: number, gender: string): boolean => {
  return !age || !weight || !gender || gender === "";
};

/**
 *
 * @param field String
 * @param value Number | String
 * @returns Boolean
 */
const isValid = (field: string, value: number | string): boolean => {
  let isValid: boolean = true;

  if (field === "gender") {
    isValid = value === "male" || value === "female";
  } else if (field === "age" || field === "weight") {
    isValid = !isNaN(Number(value));
  }

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
  const { age, weight, gender } = req.body;

  if (isRequired(age, weight, gender))
    return res.status(403).send({
      message: "age, weight and gender are required.",
    });

  if (!isValid("age", age))
    return res.status(403).send({
      message: "age's value must be a number",
    });

  if (!isValid("weight", weight))
    return res.status(403).send({
      message: "weight's value must be a number",
    });

  if (!isValid("gender", gender))
    return res.status(403).send({
      message: "gender's value must be: [male or female]",
    });

  next();
};

module.exports = isFieldsValid;
