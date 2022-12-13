import axios from "axios";
import { Request, Response } from "express";
const User = require("../models/User");
const Scan = require("../models/Scan");

interface IUsersCtrl {
  newScan?: (req: Request, res: Response) => void;
}

const usersCtrl: IUsersCtrl = {};

usersCtrl.newScan = async (req: Request, res: Response) => {
  const { age, weight, gender } = req.body;

  try {
    const user = await User.findById("6381dfefc582be09974696e3");

    if (user.firstScan === false) {
      const responseNewScan = await axios.post(
        "https://api.developer.in3d.io/scans/new?config=head_body",
        {},
        { headers: { Authorization: `Bearer ${process.env.TOKEN_3DIN}` } }
      );
      console.log(responseNewScan.data);

      const idScan: string = responseNewScan.data.id;
      const newScan = await Scan({
        idScan: idScan,
        age: age,
        weight: weight,
        gender: gender,
        user: user,
      });

      user.firstScan = true;
      user.scans.push(newScan);
      await user.save();
      await newScan.save();

      res.status(200).send({
        success: true,
        idScan: idScan,
        message: "new id scan generated",
      });
    } else if (user.firstScan === true) {
      res
        .status(200)
        .send({ success: false, message: "free id scan exceeded" });
    }
  } catch (error: unknown) {
    console.log(error as ErrorEvent);
    res.status(500).send({
      message: "Error server",
    });
  }
};

module.exports = usersCtrl;
