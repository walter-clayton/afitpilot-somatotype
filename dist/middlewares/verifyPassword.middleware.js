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
/**
 *
 * @param password String
 * @returns Boolean
 */
const isRequired = (password) => {
    return !password || password === "";
};
/**
 * password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number
 * @param pwd String
 * @returns Boolean
 */
const isPasswordValid = (pwd) => {
    const isValid = pwd.match(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/) !==
        null;
    return isValid;
};
/**
 * Middleware
 */
const isFieldsValid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = req.body;
    if (isRequired(password))
        return res.status(403).send({
            message: "Password is required.",
        });
    if (!isPasswordValid(password))
        return res.status(403).send({
            message: "Invalid password: password must contains at least: 6 characters, 1 lowercase letter, 1 uppercase letter, 1 symbol as !@#$%^&* and 1 number.",
        });
    next();
});
module.exports = isFieldsValid;
