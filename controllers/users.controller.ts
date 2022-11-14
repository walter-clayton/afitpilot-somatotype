import express, { Express, Request, Response } from "express";
const User = require("../models/User");

interface IUsersCtrl {
  getUser?: (req: Request, res: Response) => void;
  register?: (req: Request, res: Response) => void;
  deleteUser?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.getUser = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    const user = await User.findByUsername(username);

    if (user.length > 0) res.status(200).send(user);
    else res.status(404).send("user not found");
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.register = async (req: Request, res: Response) => {
  const { email, username, password } = req.body;

  try {
    const newUser: any = await User({ email, username, password });
    newUser.password = await newUser.encryptPassword(password);

    newUser.save();

    res.status(201).send({
      message:
        "User registered successfully, check your email to confirm your new account.",
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.deleteUser = async (req: Request, res: Response) => {
  const { username } = req.body;

  try {
    const user = await User.findByUsername(username);

    user.length > 0
      ? (await user[0].delete(),
        res.status(200).send({message: "Account deleted successfully"}))
      : res.status(404).send({message: "Account doesn't exists"});
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

module.exports = usersCtrl;
