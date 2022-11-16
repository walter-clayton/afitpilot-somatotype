// const verify = require("../middlewares/verify.middleware");
import { Router } from "express";
const router = Router();
const verifyToken = require("../middlewares/verifyToken.middleware");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyUserRegister = require("../middlewares/verifyUserRegister.middleware");
const verifyFields = require("../middlewares/verifyFieldsRegister.middleware");
const verifyFieldsUpdateEmailAndUsername = require('../middlewares/verifyFieldsUpdateEmailUsername.middleware')
const verifyFieldsPassword = require('../middlewares/verifyFieldsPassword.middleware')
const {
  register,
  getUser,
  deleteUser,
  updateEmailAndUsername,
  updatePassword
} = require("../controllers/users.controller");

router.get("/getUser", verifyToken, getUser);
router.post("/register", verifyKey, verifyFields, verifyUserRegister, register);
router.delete("/deleteUser", verifyToken, deleteUser);
router.post("/updateEmailAndUsername", verifyToken, verifyFieldsUpdateEmailAndUsername, updateEmailAndUsername);
router.post('/updatePassword', verifyToken, verifyFieldsPassword, updatePassword)

module.exports = router;
