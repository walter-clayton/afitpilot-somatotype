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
 * @param name String
 * @returns Boolean
 */
const isRequired = (name) => {
    return !name || name === "";
};
/**
 *
 * @param name String
 * @returns Boolean
 */
const isNameValid = (name) => {
    const isValid = name !== "" && /^[a-z\s]*$/.test(name);
    return isValid;
};
/**
 * Middleware
 */
const isFieldsValid = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.url.split("?")[0] === "/deleteUser" ? req.query : req.body;
    if (isRequired(name))
        return res.status(403).send({
            message: "Name is required.",
        });
    if (!isNameValid(name))
        return res.status(403).send({
            message: "Invalid name (just letters).",
        });
    next();
});
module.exports = isFieldsValid;
