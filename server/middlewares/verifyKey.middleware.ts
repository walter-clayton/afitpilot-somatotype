import { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
dotenv.config({ path: ".env.staging" });

const verifyKey = (req: Request, res: Response, next: NextFunction): void => {
  const access_key: string | string[] = req.headers.access_key!;
  console.log("access_key", access_key);

  if (access_key && access_key === process.env.ACCESS_KEY) return next();
  res.status(401).send({ message: "Unautorized: api key failed.", access_key });
  console.log(process.env.ACCESS_KEY);
};

module.exports = verifyKey;
