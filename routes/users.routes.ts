// const verify = require("../middlewares/verify.middleware");
import { Router } from "express";
const router = Router();
const verifyToken = require("../middlewares/verifyToken.middleware");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyUserRegister = require("../middlewares/verifyUserRegister.middleware");
const verifyFields = require("../middlewares/verifyFieldsRegister.middleware");
const verifyFieldsUpdateEmailAndUsername = require("../middlewares/verifyFieldsUpdateEmailUsername.middleware");
const verifyFieldsPassword = require("../middlewares/verifyFieldsPassword.middleware");
const verifyEmailResetPass = require("../middlewares/verifyEmailResetPass.middleware");
const verifyFieldsResetPass = require('../middlewares/verifyFieldsResetPass.middleware')
const {
  register,
  getUser,
  deleteUser,
  updateEmailAndUsername,
  updatePassword,
  sendResetEmail,
  resetPassword
} = require("../controllers/users.controller");

router.get("/getUser", getUser);
router.post("/register", verifyKey, verifyFields, verifyUserRegister, register);
router.delete("/deleteUser", verifyToken, deleteUser);
router.post(
  "/updateEmailAndUsername",
  verifyToken,
  verifyFieldsUpdateEmailAndUsername,
  updateEmailAndUsername
);
router.post(
  "/updatePassword",
  verifyToken,
  verifyFieldsPassword,
  updatePassword
);
router.post("/forgotPassword", verifyKey, verifyEmailResetPass, sendResetEmail);
router.post("/resetPassword", verifyKey, verifyFieldsResetPass, verifyToken, resetPassword);

module.exports = router;
