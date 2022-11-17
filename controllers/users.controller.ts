import express, { Express, Request, Response } from "express";
const User = require("../models/User");
const sendEmail = require("../mail/mailer");

interface IUsersCtrl {
  getUser?: (req: Request, res: Response) => void;
  register?: (req: Request, res: Response) => void;
  deleteUser?: (req: Request, res: Response) => void;
  updateEmailAndUsername?: (req: Request, res: Response) => void;
  updatePassword?: (req: Request, res: Response) => void;
  sendResetEmail?: (req: Request, res: Response) => void;
  resetPassword?: (req: Request, res: Response) => void;
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

    await newUser.save();

    res.status(201).send({
      message: "User registered successfully",
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
  const { email } = req.query;

  try {
    const user = await User.findByEmail(email);

    user.length > 0
      ? (await user[0].delete(),
        res.status(200).send({ message: "Account deleted successfully" }))
      : res.status(404).send({ message: "Account doesn't exists" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.updateEmailAndUsername = async (req: Request, res: Response) => {
  const { email, username } = req.query;

  try {
    const user = await User.findByEmail(req.user.email);

    if (user[0].email !== email) user[0].email = email;
    if (user[0].username !== username) user[0].username = username;

    await user[0].save();

    res.status(200).send({
      message: "Account edited successfully",
      user: {
        email: user[0].email,
        username: user[0].username,
      },
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.updatePassword = async (req: Request, res: Response) => {
  const newPassword = req.query.newPassword;

  try {
    const user = await User.findById(req.user_id);

    user.password = await user.encryptPassword(newPassword);

    await user.save();

    res.status(200).send({
      message: "Password edited successfully",
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.sendResetEmail = async (req: Request, res: Response) => {
  const email: string = req.body.email;

  try {
    const user: any = await User.findByEmail(email);

    const token: string = await user[0].generateAuthToken();

    const result = await sendEmail(email, user[0].username, token);

    if (result)
      res.status(200).send({ message: "Email sent to reset your password" });
    else
      res.status(403).send({
        message: "Error to send email to reset password, please try again",
      });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.resetPassword = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user_id);

    if (user) {
      user.password = await user.encryptPassword(req.body.newPassword);

      user.save();

      res.status(200).send({ message: "Password updated successfully" });
    }else{
      res.status(404).send({ message: "User not found" });
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

module.exports = usersCtrl;
