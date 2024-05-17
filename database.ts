import mongoose, { Mongoose } from "mongoose";
import { IComparison } from "./interfaces/interfaces";

import dotenv from "dotenv";
dotenv.config();
const uri: string = process.env.MONGODB_URI || "";
const dbName: string = process.env.MONGODB_DBNAME || "";
// to create db comparisons if not exist: this is a default table
const defaultComparisons: IComparison[] =
  require("./config/db.config").comparisons;

export const setupDB = (connectionString: string): Promise<void> => {
  return new Promise<void>(async (resolve, reject) => {
    try {
      await mongoose.connect(connectionString, {
        dbName: dbName,
        serverSelectionTimeoutMS: Infinity,
      });

      mongoose.connection.once("open", async () => {
        console.log("Connesso a MongoDB");

        const User = require("./models/User");
        const Comparison = require("./models/Comparison");
        const Avatar = require("./models/Avatar");
        const Somatotype = require("./models/Somatotype");
        const Anthropometric = require("./models/Anthropometric");

        const comparisons = await Comparison.find().maxTimeMS(120000);

        if (comparisons.length === 0) {
          await Comparison.insertMany([...defaultComparisons], {
            ordered: true,
          });
        }

        console.log("Database connected successfully");
        resolve();
      });

      mongoose.connection.on("error", (error) => {
        console.error("Errore di connessione a MongoDB: ", error);
        reject(error);
      });
    } catch (error) {
      console.error("Error connecting to the database: ", error);
      reject(error);
    }
  });
};
