import mongoose, { Mongoose } from "mongoose";
import { IComparison } from "./interfaces/interfaces";

const User = require("./models/User");
const Comparison = require("./models/Comparison");
const Avatar = require("./models/Avatar");
const Somatotype = require("./models/Somatotype");
const Anthropometric = require("./models/Anthropometric");

//const uri: string = require("./config/db.config").keys.mongoURI;
//const dbName: string = require("./config/db.config").keys.mongoDbName;

import dotenv from "dotenv";
dotenv.config();
const uri: string = process.env.MONGODB_URI || "";
const dbName: string = process.env.MONGODB_DBNAME || "";
// to create db comparisons if not exist: this is a default table
const defaultComparisons: IComparison[] =
  require("./config/db.config").comparisons;

const setupDB = (connectionString: string) => {
  mongoose
    .connect(connectionString, { dbName: dbName })
    .then(async (db: Mongoose) => {
      //await Comparison.collection.drop();
      const comparisons = await Comparison.find();

      // await Somatotype.collection.drop();
      // await Avatar.collection.drop();
      // await Anthropometric.collection.drop();
      // await User.collection.drop();

      comparisons.length === 0 &&
        (await Comparison.insertMany([...defaultComparisons], {
          ordered: true,
        }));

      console.log("Database connected successfully");
    })
    .catch((err) => console.error("Database connection error:", err));
};

setupDB(uri);
