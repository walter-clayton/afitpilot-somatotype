const dotenv = require("dotenv");
dotenv.config();

interface IKyes {
  mongoURI: string;
  mongoDbName: string;
}

const keys: IKyes = {
  mongoURI: process.env.MONGODB_URI!,
  mongoDbName: process.env.MONGODB_DBNAME!,
};

module.exports = keys;
