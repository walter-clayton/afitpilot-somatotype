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
const os = require("os");
const User = require("../models/User");
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");
const { sendEmailPassword, sendEmailResetPassword } = require("../mail/mailer");
const usersCtrl = {};
usersCtrl.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { email, name, data } = req.body;
    email = email.toLowerCase();
    try {
        const newUser = yield User({ email: email, name });
        // random password
        const generatedPass = yield newUser.generatePassword();
        newUser.password = yield newUser.encryptPassword(generatedPass);
        if (data) {
            if (data.somatotype && data.anthropometric) {
                const { somatotype, anthropometric } = data;
                // create the somatotype
                const endomorphy = Number(somatotype.endomorphy.toFixed(1));
                const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
                const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));
                const newSomatotype = yield Somatotype({
                    endomorphy,
                    mesomorphy,
                    ectomorphy,
                });
                // create the anthropometric
                const height = anthropometric.height;
                const weight = anthropometric.weight;
                const supraspinal_skinfold = anthropometric.supraspinal_skinfold;
                const subscapular_skinfold = anthropometric.subscapular_skinfold;
                const tricep_skinfold = anthropometric.tricep_skinfold;
                const femur_breadth = anthropometric.femur_breadth;
                const humerus_breadth = anthropometric.humerus_breadth;
                const calf_girth = anthropometric.calf_girth;
                const bicep_girth = anthropometric.bicep_girth;
                const newAnthropometric = yield Anthropometric({
                    height,
                    weight,
                    supraspinal_skinfold,
                    subscapular_skinfold,
                    tricep_skinfold,
                    femur_breadth,
                    humerus_breadth,
                    calf_girth,
                    bicep_girth,
                });
                // RelationShip
                newUser.somatotypes.push(newSomatotype);
                newUser.anthropometrics.push(newAnthropometric);
                newSomatotype.users.push(newUser);
                newSomatotype.anthropometric = newAnthropometric;
                newAnthropometric.users.push(newUser);
                newAnthropometric.somatotype = newSomatotype;
                yield newSomatotype.save();
                yield newAnthropometric.save();
            }
            else {
                return res.status(403).send({
                    message: "data.somatotype and data.anthropometric are required",
                });
            }
            yield newUser.save();
            yield sendEmailPassword(email, name, generatedPass, data);
            const accessToken = yield newUser.generateAuthToken();
            res.status(202).send({
                message: `User registered successfully, check your email to get your generated password`,
                dataSaved: data ? true : false,
                user: {
                    token: accessToken,
                    email: newUser.email,
                },
            });
        }
        else {
            res.status(403).send({ message: "Data is required" });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Error server",
        });
    }
});
usersCtrl.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.query.email;
    try {
        const user = yield User.findByEmail(email === null || email === void 0 ? void 0 : email.toLowerCase()).populate(["somatotypes", "anthropometrics"]);
        if (user.length > 0) {
            // delete all his somatotypes
            if (user[0].somatotypes.length > 0) {
                user[0].somatotypes.forEach((somatotype) => __awaiter(void 0, void 0, void 0, function* () {
                    yield somatotype.delete();
                }));
            }
            // delete all his anthropometrics
            if (user[0].anthropometrics.length > 0) {
                user[0].anthropometrics.forEach((anthropometric) => __awaiter(void 0, void 0, void 0, function* () {
                    yield anthropometric.delete();
                }));
            }
            yield user[0].delete();
            res.status(202).send({ message: "Account deleted successfully" });
        }
        else {
            res.status(403).send({ message: "Account doesn't exist" });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Error server",
        });
    }
});
usersCtrl.sendResetEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email.toLowerCase();
    try {
        const user = yield User.findByEmail(email);
        const generatedPass = yield user[0].generatePassword();
        user[0].password = yield user[0].encryptPassword(generatedPass);
        yield user[0].save();
        const result = yield sendEmailResetPassword(email, user[0].name, generatedPass);
        res.status(201).send({
            message: "Check your email to get your new generated password",
        });
        // const user: any = await User.findByEmail(email);
        // const token: string = await user[0].generateAuthToken();
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Error server",
        });
    }
});
usersCtrl.saveResults = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { somatotype, anthropometric } = req.body;
    const data = { somatotype, anthropometric };
    try {
        const user = yield User.findById(req.user_id);
        if (user) {
            if (data) {
                if (data.somatotype && data.anthropometric) {
                    const { somatotype, anthropometric } = data;
                    // create the somatotype
                    const endomorphy = Number(somatotype.endomorphy.toFixed(1));
                    const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
                    const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));
                    const newSomatotype = yield Somatotype({
                        endomorphy,
                        mesomorphy,
                        ectomorphy,
                    });
                    // create the anthropometric
                    const height = anthropometric.height;
                    const weight = anthropometric.weight;
                    const supraspinal_skinfold = anthropometric.supraspinal_skinfold;
                    const subscapular_skinfold = anthropometric.subscapular_skinfold;
                    const tricep_skinfold = anthropometric.tricep_skinfold;
                    const femur_breadth = anthropometric.femur_breadth;
                    const humerus_breadth = anthropometric.humerus_breadth;
                    const calf_girth = anthropometric.calf_girth;
                    const bicep_girth = anthropometric.bicep_girth;
                    const newAnthropometric = yield Anthropometric({
                        height,
                        weight,
                        supraspinal_skinfold,
                        subscapular_skinfold,
                        tricep_skinfold,
                        femur_breadth,
                        humerus_breadth,
                        calf_girth,
                        bicep_girth,
                    });
                    // RelationShip
                    user.somatotypes.push(newSomatotype);
                    user.anthropometrics.push(newAnthropometric);
                    newSomatotype.users.push(user);
                    newSomatotype.anthropometric = newAnthropometric;
                    newAnthropometric.users.push(user);
                    newAnthropometric.somatotype = newSomatotype;
                    yield newSomatotype.save();
                    yield newAnthropometric.save();
                    yield user.save();
                    res.status(201).send({ dataSaved: true });
                }
                else {
                    return res.status(403).send({
                        message: "data.somatotype and data.anthropometric are required",
                    });
                }
            }
        }
        else {
            res.status(403).send({ message: "User not found" });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Error server",
        });
    }
});
usersCtrl.updateEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.body;
    try {
        const user = yield User.findById(req.user_id);
        if (email === user.email) {
            res.status(403).send({ message: "nothing to update" });
        }
        else {
            user.email = email.toLowerCase();
            yield user.save();
            res.status(200).send({
                message: "Email edited successfully",
                user: {
                    email: user.email,
                },
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error with the database: please try again or contact the administrator.",
        });
    }
});
usersCtrl.updateName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = req.body;
    try {
        const user = yield User.findById(req.user_id);
        if (name === user.name) {
            res.status(403).send({ message: "nothing to update" });
        }
        else {
            user.name = name;
            yield user.save();
            res.status(200).send({
                message: "Name edited successfully",
                user: {
                    name: user.name,
                },
            });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error with the database: please try again or contact the administrator.",
        });
    }
});
usersCtrl.updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPassword = req.body.newPassword;
    try {
        const user = yield User.findById(req.user_id);
        user.password = yield user.encryptPassword(newPassword);
        yield user.save();
        res.status(200).send({
            message: "Password edited successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error with the database: please try again or contact the administrator.",
        });
    }
});
usersCtrl.getUserDatas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User.findById(req.user_id).populate([
            "somatotypes",
            "anthropometrics",
        ]);
        if (user.somatotypes && user.anthropometrics) {
            res.status(202).send({
                data: {
                    somatotypes: user.somatotypes,
                    anthropometrics: user.anthropometrics,
                },
            });
        }
        else {
            res.status(403).send({ message: "No results" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error with the database: please try again or contact the administrator.",
        });
    }
});
usersCtrl.deleteSomatotype = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const somatotype = yield Somatotype.findById(id);
        const anthropometric = yield Anthropometric.findById(somatotype.anthropometric);
        if (!somatotype && !anthropometric) {
            res.status(403).send({ message: "The result is already deleted" });
        }
        else {
            yield anthropometric.delete();
            yield somatotype.delete();
            res.status(202).send({ message: "The result deleted successfully" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error with the database: please try again or contact the administrator.",
        });
    }
});
usersCtrl.editSomatotype = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { somatotype, anthropometric } = req.body;
    try {
        const endomorphy = Number(somatotype.endomorphy.toFixed(1));
        const mesomorphy = Number(somatotype.mesomorphy.toFixed(1));
        const ectomorphy = Number(somatotype.ectomorphy.toFixed(1));
        const newSomatotype = yield Somatotype.findByIdAndUpdate(id, {
            endomorphy,
            mesomorphy,
            ectomorphy,
        });
        const newAnthropometric = yield Anthropometric.findByIdAndUpdate(newSomatotype.anthropometric, anthropometric);
        if (!somatotype) {
            res
                .status(403)
                .send({ message: "Unable to update: results doesn't exist" });
        }
        else {
            yield newAnthropometric.save();
            yield newSomatotype.save();
            res.status(202).send({ message: "The results edited successfully" });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Error with the database: please try again or contact the administrator.",
        });
    }
});
module.exports = usersCtrl;
