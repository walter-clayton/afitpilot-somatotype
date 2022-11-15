import express, { Express, NextFunction, Request, Response } from "express";
const jwt = require("jsonwebtoken");

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization; // Bearer Token
  const token = authHeader && authHeader.split(" ")[1]; // get Token without Bearer
  if (!token)
    return res.status(401).send({ message: "Unautorized: invalid token" });

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, user: any) => {
    if (err) {
      console.log(err);
      return res.status(401).send({ message: "Unautorized: invalid token" });
    }

    req.user = user;

    next();
  });
};

module.exports = verifyToken;
