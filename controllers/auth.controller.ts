import express, { Express, NextFunction, Request, Response } from "express";
const User = require("../models/User");

interface IUsersCtrl {
  login?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.login = async (req: Request, res: Response) => {
  const { email, password } = req.query;

  try {
    const user = await User.findByEmail(email);

    if (user.length > 0) {
      const matchPassword = await user[0].matchPassword(password);
      
      if (matchPassword) {
        const accessToken: string = await user[0].generateAuthToken();
        res
          .status(202)
          .send({
            message: "Login successfully",
            user: {
              token: accessToken,
              email: user[0].email,
              username: user[0].username,
            },
          });
      } else {
        res.status(403).send({ message: "Email or password incorrect" });
      }
    } else {
      res.status(404).send({ message: "Email or password incorrect" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

module.exports = usersCtrl;
