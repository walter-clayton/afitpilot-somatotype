// const verify = require("../middlewares/verify.middleware");
import { Router } from "express";
const router = Router();
const verifyToken = require("../middlewares/verifyToken.middleware");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyUser = require("../middlewares/verifyUser.middleware");
const verifyEmail = require("../middlewares/verifyEmail.middleware");
const verifyName = require("../middlewares/verifyName.middleware");
const verifyNewPassword = require("../middlewares/verifyNewPassword.middleware");
const {
  register,
  getUser,
  deleteUser,
  saveResults,
  updateEmail,
  updatePassword,
  sendResetEmail,
  resetPassword,
} = require("../controllers/users.controller");

router.post(
  "/register",
  verifyKey,
  verifyEmail,
  verifyName,
  verifyUser,
  register
);

router.delete("/deleteUser", verifyKey, verifyToken, verifyEmail, deleteUser);

router.post(
  "/forgotPassword",
  verifyKey,
  verifyEmail,
  verifyUser,
  sendResetEmail
);

router.post("/saveResults", verifyKey, verifyToken, saveResults);

router.post("/updateEmail", verifyKey, verifyToken, verifyEmail, updateEmail);

router.post(
  "/updatePassword",
  verifyKey,
  verifyToken,
  verifyNewPassword,
  updatePassword
);

module.exports = router;
