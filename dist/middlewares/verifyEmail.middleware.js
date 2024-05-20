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
 * @param email String
 * @returns Boolean
 */
const isRequired = (email) => {
    return !email || email === "";
};
/**
 *
 * @param email String
 * @returns Boolean
 */
const isEmailValid = (email) => {
    const isValid = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) !== null;
    return isValid;
};
/**
 * Middleware
 */
const isFieldsValid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.url.split('?')[0] === "/deleteUser" ? req.query : req.body;
    if (isRequired(email))
        return res.status(403).send({
            message: "Email is required.",
        });
    if (!isEmailValid(email))
        return res.status(403).send({
            message: "Invalid email.",
        });
    next();
});
module.exports = isFieldsValid;
