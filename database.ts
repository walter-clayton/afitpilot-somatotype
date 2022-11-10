import mongoose, { Mongoose } from "mongoose";

const uri: string = require('./config/keys').mongoURI;
const dbName: string = require('./config/keys').mongoDbName;

mongoose
  .connect(uri, {dbName: dbName})
  .then((db: Mongoose) => console.log("Database connected"))
  .catch((err: unknown) => console.error(err));