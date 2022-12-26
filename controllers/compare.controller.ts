import { Request, Response } from "express";
const Comparison = require("../models/Comparison");

interface ICompareCtrl {
  getAllComparisons?: (req: Request, res: Response) => void;
}

const compareCtrl: ICompareCtrl = {};

compareCtrl.getAllComparisons = async (req: Request, res: Response) => {
  try {
    const comparisons = await Comparison.find();

    res.status(200).send({ comparisons: comparisons });
  } catch (error: unknown) {
    console.log((error as ErrorEvent).message);
    res.status(500).send({
      message: "Error server",
    });
  }
};

module.exports = compareCtrl;
