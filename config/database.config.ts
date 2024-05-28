import mongoose, { Mongoose } from "mongoose";
import { IComparison } from "../interfaces/interfaces";

const User = require("../models/User");
const Comparison = require("../models/Comparison");
const Avatar = require("../models/Avatar");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");

import dotenv from "dotenv";
dotenv.config();

const uri: string = process.env.MONGODB_URI || "";
const dbName: string = process.env.MONGODB_DBNAME || "";

const defaultComparisons: IComparison[] = require("./db.config").comparisons;

export const setupDB = (connectionString: string) => {
  mongoose
    .connect(connectionString, { dbName: dbName })
    .then(async (db: Mongoose) => {
      const comparisons = await Comparison.find();

      comparisons.length === 0 &&
        (await Comparison.insertMany([...defaultComparisons], {
          ordered: true,
        }));

      console.log("Database connected successfully");
    })
    .catch((err) => console.error("Database connection error:", err));
};

module.exports = { setupDB };
