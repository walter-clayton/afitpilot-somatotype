import express, { Express, Request, Response } from "express";
import { IAnthropometric, IData, ISomatotype } from "../interfaces/interfaces";
const User = require("../models/User");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");
const { sendEmailResetPass, sendEmailPassword } = require("../mail/mailer");

interface IUsersCtrl {
  register?: (req: Request, res: Response) => void;
  deleteUser?: (req: Request, res: Response) => void;
  updateEmail?: (req: Request, res: Response) => void;
  updatePassword?: (req: Request, res: Response) => void;
  sendResetEmail?: (req: Request, res: Response) => void;
  resetPassword?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.register = async (req: Request, res: Response) => {
  const { email, data } = req.body;

  try {
    const newUser = await User({ email });

    // random password
    const generatedPass: string = await newUser.generatePassword();

    newUser.password = await newUser.encryptPassword(generatedPass);

    if (data) {
      if (data.somatotype && data.anthropometric) {
        const { somatotype, anthropometric }: IData = data;

        // create the somatotype
        const endomorphy = somatotype.endomorphy;
        const mesomorphy = somatotype.mesomorphy;
        const ectomorphy = somatotype.ectomorphy;

        const newSomatotype = await Somatotype({
          endomorphy,
          mesomorphy,
          ectomorphy,
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
      } else {
        return res.status(403).send({
          message: "data.somatotype and data.anthropometric are required",
        });
      }
    }

    await newUser.save();

    await sendEmailPassword(email, generatedPass);

    res.status(201).send({
      message:
        "User registered successfully, check your email to get your generated password",
    });
  } catch (error: unknown) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

usersCtrl.deleteUser = async (req: Request, res: Response) => {
  const { email } = req.query;

  try {
    const user = await User.findByEmail(email).populate([
      "somatotypes",
      "anthropometrics",
    ]);

    if (user.length > 0) {
      // delete all his somatotypes
      if (user[0].somatotypes.length > 0) {
        user[0].somatotypes.forEach(async (somatotype: any) => {
          await somatotype.delete();
        });
      }

      // delete all his anthropometrics
      if (user[0].anthropometrics.length > 0) {
        user[0].anthropometrics.forEach(async (anthropometric: any) => {
          await anthropometric.delete();
        });
      }

      await user[0].delete();
      res.status(202).send({ message: "Account deleted successfully" });
    } else {
      res.status(403).send({ message: "Account doesn't exist" });
    }
  } catch (error: unknown) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

usersCtrl.sendResetEmail = async (req: Request, res: Response) => {
  const email: string = req.body.email;

  try {
    const user = await User.findByEmail(email);

    const generatedPass: string = await user[0].generatePassword();

    user[0].password = await user[0].encryptPassword(generatedPass);

    await user[0].save();

    const result = await sendEmailPassword(email, generatedPass);

    res.status(201).send({
      message: "Check your email to get your new generated password",
    });
    // const user: any = await User.findByEmail(email);

    // const token: string = await user[0].generateAuthToken();
  } catch (error: unknown) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

// usersCtrl.updateEmail = async (req: Request, res: Response) => {
//   const { email } = req.body;

//   try {
//     const user = await User.findById(req.user_id);

//     user.email = email;

//     await user.save();

//     res.status(200).send({
//       message: "Account edited successfully",
//       user: {
//         email: user.email,
//       },
//     });
//   } catch (error: unknown) {
//     console.log(error);
//     res.status(500).send({
//       message:
//         "Error with the database: please try again or contact the administrator.",
//     });
//   }
// };

// usersCtrl.updatePassword = async (req: Request, res: Response) => {
//   const newPassword = req.query.newPassword;

//   try {
//     const user = await User.findById(req.user_id);

//     user.password = await user.encryptPassword(newPassword);

//     await user.save();

//     res.status(200).send({
//       message: "Password edited successfully",
//     });
//   } catch (error: unknown) {
//     console.log(error);
//     res.status(500).send({
//       message:
//         "Error with the database: please try again or contact the administrator.",
//     });
//   }
// };

// usersCtrl.resetPassword = async (req: Request, res: Response) => {
//   try {
//     const user = await User.findById(req.user_id);

//     if (user) {
//       user.password = await user.encryptPassword(req.body.newPassword);

//       user.save();

//       res.status(200).send({ message: "Password updated successfully" });
//     } else {
//       res.status(404).send({ message: "User not found" });
//     }
//   } catch (error: unknown) {
//     console.log(error);
//     res.status(500).send({
//       message:
//         "Error with the database: please try again or contact the administrator.",
//     });
//   }
// };

module.exports = usersCtrl;
