import express, { Express, Request, Response } from "express";
import { IAnthropometric, IData, ISomatotype } from "../interfaces/interfaces";
const User = require("../models/User");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");
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
    await user[0].populate(['somatotypes', 'anthropometrics'])
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
  const { email, username, password, data } = req.body;

  try {
    const newUser = await User({ email, username, password });
    newUser.password = await newUser.encryptPassword(password);

    if (data) {
      const { somatotype, anthropometric }: IData = data;


      // create the somatotype
      const endomorph = somatotype[0];
      const mesomorph = somatotype[1];
      const ectomorph = somatotype[2];

      const newSomatotype = await Somatotype({
        endomorph,
        mesomorph,
        ectomorph,
      });

      // create the anthropometric
      const height = anthropometric.height;
      const weight = anthropometric.weight;
      const supraspinal_skinfold = anthropometric.supraspinal_skinfold;
      const subscapular_skinfold = anthropometric.subscapular_skinfold;
      const tricep_skinfold = anthropometric.tricep_skinfold;
      const femur_breadth = anthropometric.femur_breadth;
      const humerus_breadth = anthropometric.humerus_breadth;
      const calf_girth = anthropometric.calf_girth;
      const bicep_girth = anthropometric.bicep_girth;

      const newAnthropometric = await Anthropometric({
        height,
        weight,
        supraspinal_skinfold,
        subscapular_skinfold,
        tricep_skinfold,
        femur_breadth,
        humerus_breadth,
        calf_girth,
        bicep_girth,
      });

      // RelationShip
      newUser.somatotypes.push(newSomatotype);
      newUser.anthropometrics.push(newAnthropometric);

      newSomatotype.users.push(newUser);
      newSomatotype.anthropometric = newAnthropometric;

      newAnthropometric.users.push(newUser);
      newAnthropometric.somatotype = newSomatotype;

      await newSomatotype.save();
      await newAnthropometric.save();
    }

    await newUser.save();

    res.status(201).send({
      message: "User registered successfully",
    });
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message: (error as ErrorEvent).message,
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
    } else {
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
