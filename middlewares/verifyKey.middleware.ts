import { NextFunction, Request, Response } from "express";

const verifyKey = (req: Request, res: Response, next: NextFunction): void => {
  const access_key: string | string[] = req.headers.access_key!;

  if (access_key && access_key === process.env.ACCESS_KEY) return next();
  res.status(401).send({message: "Unautorized: api key failed."});
};

module.exports = verifyKey;
