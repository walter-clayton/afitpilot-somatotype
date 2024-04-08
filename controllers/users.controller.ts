import express, { Express, Request, Response } from "express";
const os = require("os");
import { IAnthropometric, IData, ISomatotype } from "../interfaces/interfaces";
const User = require("../models/User");
const Avatar = require("../models/Avatar");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");
const { sendEmailPassword, sendEmailResetPassword } = require("../mail/mailer");
import mongoose, { Schema, model } from "mongoose";
import sendSkippedTestEmail from "../mail/sendSkippedTestEmail";

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
  getAllUsers?: (req: Request, res: Response) => void;
  getAllSomatotypes?: (req: Request, res: Response) => void;
  getAvatar?: (req: Request, res: Response) => void;
  updateAvatar?: (req: Request, res: Response) => void;
  updateMainColor?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.register = async (req: Request, res: Response) => {
  let { email, name, data, skipTest, gender }: any = req.body;

  email = (email as string).toLowerCase();

  try {
    const newUser = await User({
      email: email,
      name,
      gender: skipTest
        ? gender
        : data && data.user && data.user.gender
        ? data.user.gender
        : "unknown",
      mainColor:
        data && data.user && data.user.mainColor ? data.user.mainColor : 0,
    });

    const generatedPass: string = await newUser.generatePassword();
    newUser.password = await newUser.encryptPassword(generatedPass);

    if (skipTest) {
      newUser.skippedTest = true;
      // Send email verification when user skips the test
      await sendSkippedTestEmail(email, name, generatedPass);
    } else if (data && data.somatotype && data.anthropometric) {
      const { somatotype, anthropometric } = data;

      const newSomatotype = await Somatotype({
        endomorphy: somatotype.endomorphy,
        mesomorphy: somatotype.mesomorphy,
        ectomorphy: somatotype.ectomorphy,
        titleSomatotype: somatotype.titleSomatotype,
        codeSomatotype: somatotype.codeSomatotype,
      });

      const newAnthropometric = await Anthropometric({
        height: anthropometric.height,
        weight: anthropometric.weight,
        supraspinal_skinfold: anthropometric.supraspinal_skinfold,
        subscapular_skinfold: anthropometric.subscapular_skinfold,
        tricep_skinfold: anthropometric.tricep_skinfold,
        femur_breadth: anthropometric.femur_breadth,
        humerus_breadth: anthropometric.humerus_breadth,
        calf_girth: anthropometric.calf_girth,
        bicep_girth: anthropometric.bicep_girth,
        body_fat: anthropometric.body_fat,
      });

      const avatar = { ...data.avatar };
      const newAvatar = await Avatar({ ...avatar });

      while (newUser.avatars.includes(newAvatar._id)) {
        newAvatar._id = new mongoose.Types.ObjectId();
      }

      newUser.somatotypes.push(newSomatotype);
      newUser.anthropometrics.push(newAnthropometric);
      newUser.avatars.push(newAvatar);

      newSomatotype.users.push(newUser);
      newSomatotype.avatar = newAvatar;
      newSomatotype.anthropometric = newAnthropometric;

      newAnthropometric.users.push(newUser);
      newAnthropometric.somatotype = newSomatotype;

      newAvatar.user = newUser;
      newAvatar.somatotype = newSomatotype;

      await sendEmailPassword(email, name, generatedPass, data);
      await newSomatotype.save();
      await newAnthropometric.save();
      await newAvatar.save();
    } else {
      return res.status(403).send({
        message: "Data, including somatotype and anthropometric, are required",
      });
    }

    await newUser.save();

    const accessToken: string = await newUser.generateAuthToken();

    res.status(202).send({
      message: `User registered successfully, check your email to get your generated password`,
      dataSaved: data ? true : false,
      user: {
        token: accessToken,
        email: newUser.email,
        name: newUser.name,
        gender: newUser.gender,
        mainColor: newUser.mainColor,
      },
    });
  } catch (error: unknown) {
    console.log((error as Error).message);
    res.status(500).send({
      message: "Internal server error",
    });
  }
};

usersCtrl.deleteUser = async (req: Request, res: Response) => {
  const email: string | qs.ParsedQs | string[] | qs.ParsedQs[] | undefined =
    req.query.email;

  try {
    const user = await User.findByEmail(
      (email as string)?.toLowerCase()
    ).populate(["somatotypes", "anthropometrics", "avatars"]);

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

      // delete all his avatars
      if (user[0].avatars.length > 0) {
        user[0].avatars.forEach(async (avatar: any) => {
          await avatar.delete();
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
  const { data } = req.body;
  const user = await User.findById(req.user_id);

  if (data) {
    if (data.somatotype && data.anthropometric) {
      const { somatotype, anthropometric }: IData = data;

      // create the somatotype
      const endomorphy = Number(somatotype.endomorphy.toFixed(1));
      const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
      const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));
      const titleSomatotype = somatotype.titleSomatotype;
      const codeSomatotype = somatotype.codeSomatotype;

      const newSomatotype = await Somatotype({
        endomorphy,
        mesomorphy,
        ectomorphy,
        titleSomatotype,
        codeSomatotype,
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
      const body_fat = anthropometric.body_fat;

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
        body_fat,
      });

      // create Avatar
      const avatar = { ...data.avatar };

      const newAvatar = await Avatar({ ...avatar });

      while (user.avatars.includes(newAvatar._id)) {
        newAvatar._id = new mongoose.Types.ObjectId();
      }

      newSomatotype.avatar = newAvatar;

      newSomatotype.anthropometric = newAnthropometric;
      newAnthropometric.somatotype = newSomatotype;
      newAvatar.somatotype = newSomatotype;
      newAvatar.user = user;
      user.avatars.push(newAvatar);
      user.somatotypes.push(newSomatotype);
      user.anthropometrics.push(newAnthropometric);

      await newSomatotype.save();
      await newAnthropometric.save();
      await newAvatar.save();
      await user.save();
    } else {
      return res.status(403).send({
        message: "data.somatotype and data.anthropometric are required",
      });
    }

    res.status(202).send({
      message: `New somatotype added successfully!`,
      dataSaved: data ? true : false,
    });
  } else {
    res.status(403).send({ message: "Data is required" });
  }
};

usersCtrl.updateEmail = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.findById(req.user_id);

    if (!user) return res.status(403).send({ message: "User not found" });

    if (email === user.email) {
      return res.status(403).send({ message: "nothing to update" });
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

    if (!user) return res.status(403).send({ message: "User not found" });

    if (name === user.name) {
      return res.status(403).send({ message: "nothing to update" });
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

    if (!user) return res.status(403).send({ message: "User not found" });

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
    const avatar = await Avatar.findById(somatotype.avatar);

    if (!somatotype && !anthropometric) {
      res.status(403).send({ message: "The result is already deleted" });
    } else {
      await anthropometric.delete();
      await somatotype.delete();
      await avatar.delete();

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
  const { data, id } = req.body;

  const editedSomatotype = await Somatotype.findById(id);
  const editedAnthropometric = await Anthropometric.findById(
    editedSomatotype.anthropometric
  );
  const editedAvatar = await Avatar.findById(editedSomatotype.avatar);

  if (data) {
    if (data.somatotype && data.anthropometric) {
      const { somatotype, anthropometric }: IData = data;

      // create the somatotype
      editedSomatotype.endomorphy = Number(somatotype.endomorphy.toFixed(1));
      editedSomatotype.mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
      editedSomatotype.ectomorphy = Number(somatotype.ectomorphy.toFixed(1));
      editedSomatotype.titleSomatotype = somatotype.titleSomatotype;
      editedSomatotype.codeSomatotype = somatotype.codeSomatotype;

      // create the anthropometric
      editedAnthropometric.height = anthropometric.height;
      editedAnthropometric.weight = anthropometric.weight;
      editedAnthropometric.supraspinal_skinfold =
        anthropometric.supraspinal_skinfold;
      editedAnthropometric.subscapular_skinfold =
        anthropometric.subscapular_skinfold;
      editedAnthropometric.tricep_skinfold = anthropometric.tricep_skinfold;
      editedAnthropometric.femur_breadth = anthropometric.femur_breadth;
      editedAnthropometric.humerus_breadth = anthropometric.humerus_breadth;
      editedAnthropometric.calf_girth = anthropometric.calf_girth;
      editedAnthropometric.bicep_girth = anthropometric.bicep_girth;
      editedAnthropometric.body_fat = anthropometric.body_fat;

      // create Avatar
      const avatar = { ...data.avatar };
      editedAvatar.titleSoma = editedSomatotype.titleSomatotype;
      editedAvatar.codeSoma = editedSomatotype.codeSomatotype;

      await editedSomatotype.save();
      await editedAnthropometric.save();
      await editedAvatar.save();
    } else {
      return res.status(403).send({
        message: "data.somatotype and data.anthropometric are required",
      });
    }

    res.status(202).send({
      message: `New somatotype added successfully!`,
      dataSaved: data ? true : false,
    });
  } else {
    res.status(403).send({ message: "Data is required" });
  }
};

usersCtrl.getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();

    res.status(200).send({ count: users.length });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.getAllSomatotypes = async (req: Request, res: Response) => {
  try {
    const somatotypes = await Somatotype.find();

    let uniqueSomatotypes: string[] = [];

    somatotypes.forEach((obj: ISomatotype) => {
      let somatotype: string = `${obj.endomorphy}${obj.mesomorphy}${obj.ectomorphy}`;
      !uniqueSomatotypes.includes(somatotype) &&
        uniqueSomatotypes.push(
          `${obj.endomorphy}${obj.mesomorphy}${obj.ectomorphy}`
        );
    });

    res.status(200).send({
      uniqueSomatotypes: uniqueSomatotypes.length,
      count: somatotypes.length,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.getAvatar = async (req: Request, res: Response) => {
  const user = await User.findById(req.user_id).populate([
    "avatars",
    "somatotypes",
  ]);

  const avatar = user.avatars[user.avatars.length - 1];

  res.send({ avatar: user.avatars[user.avatars.length - 1] });
};

usersCtrl.updateAvatar = async (req: Request, res: Response) => {
  try {
    const { avatar, id } = req.body;

    let editedAvatar = await Avatar.findById(id);

    editedAvatar.indexHair = avatar.indexHair;
    editedAvatar.indexFace = avatar.indexFace;
    editedAvatar.indexBeard = avatar.indexBeard;
    editedAvatar.indexColorSkin = avatar.indexColorSkin;
    editedAvatar.indexColorHair = avatar.indexColorHair;
    console.log(editedAvatar);
    await editedAvatar.save();

    res.status(200).send({
      message: "Avatar edited successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

usersCtrl.updateMainColor = async (req: Request, res: Response) => {
  try {
    const mainColor = req.body.mainColor;

    let editedUser = await User.findById(req.user_id);

    editedUser.mainColor = mainColor;

    await editedUser.save();

    res.status(200).send({
      message: "Main color updated successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message:
        "Error with the database: please try again or contact the administrator.",
    });
  }
};

module.exports = usersCtrl;
