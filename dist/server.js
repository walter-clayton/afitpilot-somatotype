"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routesUsers = require('./routes/users.routes');
const routesAuth = require('./routes/auth.routes');
// Initialization
const app = (0, express_1.default)();
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
dotenv.config();
// Settings
const PORT = parseInt(process.env.PORT);
app.set("port", PORT || 3000);
// Midlewares
// limit: "50mb" = fixing "413 Request Entity Too Large" errors
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
// Routes
// app.use(routesUsers);
app.use('/users', routesUsers);
app.use('/auth', routesAuth);
module.exports = app;
