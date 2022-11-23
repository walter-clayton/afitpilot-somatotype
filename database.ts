import mongoose, { Mongoose } from "mongoose";
const User = require("./models/User");

const uri: string = require("./config/db.config").mongoURI;
const dbName: string = require("./config/db.config").mongoDbName;

mongoose
  .connect(uri, { dbName: dbName })
  .then(async (db: Mongoose) => {
    // User.collection.drop()
    console.log("Database connected");
  })
  .catch((err: unknown) => console.error(err));
