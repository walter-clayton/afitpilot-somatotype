import { NextFunction, Request, Response } from "express";

const isIdValid = (id: string): boolean => {
  return id.match(/(?<=\[)(.*?)(?=\])/) !== null;
};

const verifyKey = (req: Request, res: Response, next: NextFunction): void => {
  const { idScan } = req.body;

  console.log(isIdValid(idScan));
};

module.exports = verifyKey;
