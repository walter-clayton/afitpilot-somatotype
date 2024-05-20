"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyKey = (req, res, next) => {
    const access_key = req.headers.access_key;
    if (access_key && access_key === process.env.ACCESS_KEY)
        return next();
    res.status(401).send({ message: "Unautorized: api key failed." });
};
module.exports = verifyKey;
