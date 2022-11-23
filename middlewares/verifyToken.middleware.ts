import { NextFunction, Request, Response } from "express";
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization; // Bearer Token
  const token = authHeader && authHeader.split(" ")[1]; // get Token without Bearer
  if (!token)
    return res.status(401).send({ message: "Unautorized: invalid token" });

  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    async (err: any, user: any) => {
      if (err) {
        console.log(err);
        return res.status(401).send({ message: "Unautorized: invalid token" });
      }

      req.user_id = user.id;

      const findUser = await User.findById(user.id);

      findUser
        ? next()
        : res.status(403).send({ message: "User not found with this token" });
    }
  );
};

module.exports = verifyToken;
