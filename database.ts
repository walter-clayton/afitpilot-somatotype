import mongoose, { Mongoose } from "mongoose";
import { IComparison } from "./interfaces/interfaces";
const User = require("./models/User");
const Comparison = require("./models/Comparison");

const uri: string = require("./config/db.config").keys.mongoURI;
const dbName: string = require("./config/db.config").keys.mongoDbName;

// to create db comparisons if not exist: this is a default table
const defaultComparisons: IComparison[] =
  require("./config/db.config").comparisons;

mongoose
  .connect(uri, { dbName: dbName })
  .then(async (db: Mongoose) => {
    // await Comparison.collection.drop();
    const comparisons = await Comparison.find();

    console.log(comparisons.length);

    comparisons.length === 0 &&
      (await Comparison.insertMany([...defaultComparisons], {
        ordered: true,
      }));

    console.log("Database connected");
  })
  .catch((err: unknown) => console.error(err));
