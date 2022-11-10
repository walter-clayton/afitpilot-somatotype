import express, { Express } from "express";
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routesUsers = require('./routes/users.routes')

// Initialization
const app: Express = express();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));
dotenv.config();

// Settings
const PORT: number = parseInt(process.env.PORT!)
app.set("port", PORT || 3000);

// Midlewares
// limit: "50mb" = fixing "413 Request Entity Too Large" errors
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))


// Routes
app.use('/users', routesUsers);

module.exports = app;