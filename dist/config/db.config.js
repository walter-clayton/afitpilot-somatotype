"use strict";
const dotenv = require("dotenv");
dotenv.config();
const keys = {
    mongoURI: process.env.MONGODB_URI,
    mongoDbName: process.env.MONGODB_DBNAME,
};
module.exports = keys;
