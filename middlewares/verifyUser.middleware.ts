import { NextFunction, Request, Response } from "express";
const User = require("../models/User");

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;

  try {
    let user = await User.findByEmail(email);

    if (user.length > 0)
      return res.status(403).send({ message: "Email already exists" });

    next();
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message: (error as ErrorEvent).message,
    });
  }
};

module.exports = verifyUser;
