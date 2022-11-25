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
const mongoose_1 = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    somatotypes: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Somatotype" }],
    anthropometrics: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "Anthropometric" }],
    createdAt: { type: String, default: new Date().toLocaleString() },
    updatedAt: { type: String, default: new Date().toLocaleString() },
});
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "3600s",
    });
    return token;
};
userSchema.methods.generatePassword = () => {
    var pass = "";
    var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    // according to validation of password: at least 1 Uppercase, 1 symbol and 1 number
    pass =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26)) +
            "@#$".charAt(Math.floor(Math.random() * 3)) +
            "0123456789".charAt(Math.floor(Math.random() * 10));
    for (let i = 1; i <= 8; i++) {
        var randomIndex = Math.floor(Math.random() * str.length);
        pass += str.charAt(randomIndex);
    }
    return pass;
};
userSchema.methods.encryptPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    const salt = yield bcrypt.genSalt(Number(process.env.SALT));
    return yield bcrypt.hash(password, salt);
});
userSchema.methods.matchPassword = function (password) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcrypt.compare(password, this.password);
    });
};
userSchema.statics.findByEmail = function (email) {
    return this.find({ email: email });
};
module.exports = (0, mongoose_1.model)("User", userSchema);
