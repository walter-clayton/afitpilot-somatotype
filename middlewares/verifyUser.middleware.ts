import express, { Express, NextFunction, Request, Response } from "express";
const User = require("../models/User");

const verifyUser = async (req: Request, res: Response, next: NextFunction) => {
  const email: string = req.body.email;
  const username: string = req.body.username;

  try {
    let user = await User.findByEmail(email)
    if (user.length > 0) return res.status(403).send("Email already exists");

    user = await User.findByUsername(username);
    if (user.length > 0) return res.status(403).send("Username already exists");
    
    next();
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({message: "Error with the database: please try again or contact the administrator."});
  }
};

module.exports = verifyUser;
