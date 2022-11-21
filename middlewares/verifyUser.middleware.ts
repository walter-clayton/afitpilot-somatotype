import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;

  try {
    let user = await User.findByEmail(email);

    if (user.length > 0 && req.url === "/register")
      return res.status(403).send({ message: "Email already exists" });

    if (user.length === 0 && req.url === "/forgotPassword")
      return res.status(403).send({ message: "Email doesn't exist" });

    next();
  } catch (error: unknown) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

module.exports = verifyUser;
