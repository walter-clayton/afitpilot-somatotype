import express, { Express, Request, Response } from "express";
const os = require("os");
import { IAnthropometric, IData, ISomatotype } from "../interfaces/interfaces";
const User = require("../models/User");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");
const { sendEmailPassword, sendEmailResetPassword } = require("../mail/mailer");

interface IUsersCtrl {
  register?: (req: Request, res: Response) => void;
  deleteUser?: (req: Request, res: Response) => void;
  updateEmail?: (req: Request, res: Response) => void;
  updatePassword?: (req: Request, res: Response) => void;
  sendResetEmail?: (req: Request, res: Response) => void;
  updateName?: (req: Request, res: Response) => void;
  saveResults?: (req: Request, res: Response) => void;
  getUserDatas?: (req: Request, res: Response) => void;
  deleteSomatotype?: (req: Request, res: Response) => void;
  editSomatotype?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.register = async (req: Request, res: Response) => {
  let { email, name, data } = req.body;

  email = (email as string).toLowerCase();

  try {
    const newUser = await User({ email: email, name });

    // random password
    const generatedPass: string = await newUser.generatePassword();

    newUser.password = await newUser.encryptPassword(generatedPass);

    if (data) {
      if (data.somatotype && data.anthropometric) {
        const { somatotype, anthropometric }: IData = data;

        // create the somatotype
        const endomorphy = Number(somatotype.endomorphy.toFixed(1));
        const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
        const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));

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

      await newUser.save();

      await sendEmailPassword(email, name, generatedPass, data);

      const accessToken: string = await newUser.generateAuthToken();

      res.status(202).send({
        message: `User registered successfully, check your email to get your generated password`,
        dataSaved: data ? true : false,
        user: {
          token: accessToken,
          email: newUser.email,
        },
      });
    } else {
      res.status(403).send({ message: "Data is required" });
    }
  } catch (error: unknown) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

usersCtrl.deleteUser = async (req: Request, res: Response) => {
  const email: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined =
    req.query.email;

  try {
    const user = await User.findByEmail(
      (email as string)?.toLowerCase()
    ).populate(["somatotypes", "anthropometrics"]);

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
  const email: string = req.body.email.toLowerCase();

  try {
    const user = await User.findByEmail(email);

    const generatedPass: string = await user[0].generatePassword();

    user[0].password = await user[0].encryptPassword(generatedPass);

    await user[0].save();

    const result = await sendEmailResetPassword(
      email,
      user[0].name,
      generatedPass
    );

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

usersCtrl.saveResults = async (req: Request, res: Response) => {
  const { somatotype, anthropometric } = req.body;

  const data = {somatotype, anthropometric}

  try {
    const user = await User.findById(req.user_id);

    if (user) {
      if (data) {
        if (data.somatotype && data.anthropometric) {
          const { somatotype, anthropometric }: IData = data;

          // create the somatotype
          const endomorphy = Number(somatotype.endomorphy.toFixed(1));
          const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
          const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));

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
          user.somatotypes.push(newSomatotype);
          user.anthropometrics.push(newAnthropometric);

          newSomatotype.users.push(user);
          newSomatotype.anthropometric = newAnthropometric;

          newAnthropometric.users.push(user);
          newAnthropometric.somatotype = newSomatotype;

          await newSomatotype.save();
          await newAnthropometric.save();
          await user.save();

          res.status(201).send({ dataSaved: true });
        } else {
          return res.status(403).send({
            message: "data.somatotype and data.anthropometric are required",
          });
        }
      }
    } else {
      res.status(403).send({ message: "User not found" });
    }
  } catch (error) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

usersCtrl.updateEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.findById(req.user_id);

    if (email === user.email) {
      res.status(403).send({ message: "nothing to update" });
    } else {
      user.email = email.toLowerCase();

      await user.save();

      res.status(200).send({
        message: "Email edited successfully",
        user: {
          email: user.email,
        },
      });
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.updateName = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const user = await User.findById(req.user_id);

    if (name === user.name) {
      res.status(403).send({ message: "nothing to update" });
    } else {
      user.name = name;

      await user.save();

      res.status(200).send({
        message: "Name edited successfully",
        user: {
          name: user.name,
        },
      });
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.updatePassword = async (req: Request, res: Response) => {
  const newPassword = req.body.newPassword;

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

usersCtrl.getUserDatas = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user_id).populate([
      "somatotypes",
      "anthropometrics",
    ]);

    if (user.somatotypes && user.anthropometrics) {
      res.status(202).send({
        data: {
          somatotypes: user.somatotypes,
          anthropometrics: user.anthropometrics,
        },
      });
    } else {
      res.status(403).send({ message: "No results" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.deleteSomatotype = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const somatotype = await Somatotype.findById(id);
    const anthropometric = await Anthropometric.findById(
      somatotype.anthropometric
    );

    if (!somatotype && !anthropometric) {
      res.status(403).send({ message: "The result is already deleted" });
    } else {
      await anthropometric.delete();
      await somatotype.delete();

      res.status(202).send({ message: "The result deleted successfully" });
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.editSomatotype = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { somatotype, anthropometric }: IData = req.body;

  try {
    const endomorphy = Number(somatotype.endomorphy.toFixed(1));
    const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
    const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));

    const newSomatotype = await Somatotype.findByIdAndUpdate(id, {
      endomorphy,
      mesomorphy,
      ectomorphy,
    });
    const newAnthropometric = await Anthropometric.findByIdAndUpdate(
      newSomatotype.anthropometric,
      anthropometric
    );

    if (!somatotype) {
      res
        .status(403)
        .send({ message: "Unable to update: results doesn't exist" });
    } else {
      await newAnthropometric.save();
      await newSomatotype.save();

      res.status(202).send({ message: "The results edited successfully" });
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
