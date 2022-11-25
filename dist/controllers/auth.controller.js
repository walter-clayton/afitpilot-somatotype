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
const Somatotype = require("../models/Somatotype");
const Anthropometric = require("../models/Anthropometric");
const usersCtrl = {};
usersCtrl.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, data } = req.body;
    try {
        const user = yield User.findByEmail(email);
        if (user.length > 0) {
            const matchPassword = yield user[0].matchPassword(password);
            if (matchPassword) {
                const accessToken = yield user[0].generateAuthToken();
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
                        user[0].somatotypes.push(newSomatotype);
                        user[0].anthropometrics.push(newAnthropometric);
                        newSomatotype.users.push(user[0]);
                        newSomatotype.anthropometric = newAnthropometric;
                        newAnthropometric.users.push(user[0]);
                        newAnthropometric.somatotype = newSomatotype;
                        yield newSomatotype.save();
                        yield newAnthropometric.save();
                        yield user[0].save();
                    }
                    else {
                        return res.status(403).send({
                            message: "data.somatotype and data.anthropometric are required",
                        });
                    }
                }
                res.status(202).send({
                    message: `Login ${data ? "and results saved " : ""}successfully`,
                    dataSaved: data ? true : false,
                    user: {
                        token: accessToken,
                        email: user[0].email,
                        name: user[0].name,
                    },
                });
            }
            else {
                res.status(403).send({ message: "Email or password incorrect" });
            }
        }
        else {
            res.status(403).send({ message: "Email or password incorrect" });
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({
            message: "Error server",
        });
    }
});
module.exports = usersCtrl;
