import express, { Express, NextFunction, Request, Response } from "express";
import { IData } from "../interfaces/interfaces";
const User = require("../models/User");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");

interface IUsersCtrl {
  login?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.login = async (req: Request, res: Response) => {
  const { email, password, data } = req.body;

  try {
    const user = await User.findByEmail(email);

    if (user.length > 0) {
      const matchPassword = await user[0].matchPassword(password);

      if (matchPassword) {
        const accessToken: string = await user[0].generateAuthToken();

        // if (data) {
        //   if (data.somatotype && data.anthropometric) {
        //     const { somatotype, anthropometric }: IData = data;

        //     // create the somatotype
        //     const endomorphy = Number(somatotype.endomorphy.toFixed(1));
        //     const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
        //     const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));

        //     const newSomatotype = await Somatotype({
        //       endomorphy,
        //       mesomorphy,
        //       ectomorphy,
        //     });

        //     // create the anthropometric
        //     const height = anthropometric.height;
        //     const weight = anthropometric.weight;
        //     const supraspinal_skinfold = anthropometric.supraspinal_skinfold;
        //     const subscapular_skinfold = anthropometric.subscapular_skinfold;
        //     const tricep_skinfold = anthropometric.tricep_skinfold;
        //     const femur_breadth = anthropometric.femur_breadth;
        //     const humerus_breadth = anthropometric.humerus_breadth;
        //     const calf_girth = anthropometric.calf_girth;
        //     const bicep_girth = anthropometric.bicep_girth;

        //     const newAnthropometric = await Anthropometric({
        //       height,
        //       weight,
        //       supraspinal_skinfold,
        //       subscapular_skinfold,
        //       tricep_skinfold,
        //       femur_breadth,
        //       humerus_breadth,
        //       calf_girth,
        //       bicep_girth,
        //     });

        //     // RelationShip
        //     user[0].somatotypes.push(newSomatotype);
        //     user[0].anthropometrics.push(newAnthropometric);

        //     newSomatotype.users.push(user[0]);
        //     newSomatotype.anthropometric = newAnthropometric;

        //     newAnthropometric.users.push(user[0]);
        //     newAnthropometric.somatotype = newSomatotype;

        //     await newSomatotype.save();
        //     await newAnthropometric.save();
        //     await user[0].save();
        //   } else {
        //     return res.status(403).send({
        //       message: "data.somatotype and data.anthropometric are required",
        //     });
        //   }
        // }

        res.status(202).send({
          message: `Log in ${data ? "and results saved " : ""}successfully`,
          dataSaved: data ? true : false,
          user: {
            token: accessToken,
            email: user[0].email,
            name: user[0].name,
            gender: user[0].gender,
            mainColor: user[0].mainColor,
          },
        });
      } else {
        res.status(403).send({ message: "Email or password incorrect" });
      }
    } else {
      res.status(403).send({ message: "Email or password incorrect" });
    }
  } catch (error) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

module.exports = usersCtrl;
