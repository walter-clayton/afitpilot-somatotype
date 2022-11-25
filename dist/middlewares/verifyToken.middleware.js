"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization; // Bearer Token
    const token = authHeader && authHeader.split(" ")[1]; // get Token without Bearer
    if (!token)
        return res.status(401).send({ message: "Unautorized: invalid token" });
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => __awaiter(void 0, void 0, void 0, function* () {
        if (err) {
            console.log(err);
            return res.status(401).send({ message: "Unautorized: invalid token" });
        }
        req.user_id = user.id;
        const findUser = yield User.findById(user.id);
        findUser
            ? next()
            : res.status(403).send({ message: "User not found with this token" });
    }));
};
module.exports = verifyToken;
