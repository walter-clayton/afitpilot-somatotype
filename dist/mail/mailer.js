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
const mail_template_1 = require("./mail-template");
const nodemailer = require("nodemailer");
const { htmlTempResetPass, htmlTempPassword } = require("./mail-template");
// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});
// /**
//  *
//  * @param email String
//  * @param token String
//  */
// const sendEmailResetPass = async (
//   email: string,
//   pass: string
// ): Promise<void> => {
//   const message: string = "To reset your password, click on the button below:";
//   const options: IOptionsNodemailer = {
//     from: `noreply <${process.env.MAIL_USER}>`, // sender address
//     to: email, // receiver email
//     subject: "Reset your account", // Subject line
//     text: message,
//     html: htmlTempPassword(message, pass),
//   };
//   try {
//     const info = await transporter.sendMail(options);
//     return info;
//   } catch (error) {
//     console.log(error);
//   }
// };
const sendEmailPassword = (email, name, pass, data) => __awaiter(void 0, void 0, void 0, function* () {
    const message = "You can use this randomly generated password to access your profile";
    const options = {
        from: `noreply <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Your password to access your account",
        text: message,
        html: htmlTempPassword(message, name, pass, data),
    };
    try {
        const info = yield transporter.sendMail(options);
        return info;
    }
    catch (error) {
        console.log(error);
    }
});
const sendEmailResetPassword = (email, name, pass) => __awaiter(void 0, void 0, void 0, function* () {
    const message = "You can use this randomly generated password to access your profile";
    const options = {
        from: `noreply <${process.env.MAIL_USER}>`,
        to: email,
        subject: "Your password to access your account",
        text: message,
        html: (0, mail_template_1.htmlTempResetPassword)(message, name, pass),
    };
    try {
        const info = yield transporter.sendMail(options);
        return info;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = { sendEmailPassword, sendEmailResetPassword };
