
// const verify = require("../middlewares/verify.middleware");
import { Request, Response, Router } from 'express';
const router = Router();
const verifyKey = require('../middlewares/verifyKey.middleware')
const verifyUser = require('../middlewares/verifyUser.middleware')
const isFieldsValid = require('../middlewares/isFieldsValid.middleware')
const { register} = require("../controllers/users.controller");


router.post("/register", verifyKey, isFieldsValid, verifyUser, register);

module.exports = router;