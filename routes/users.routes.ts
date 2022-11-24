// const verify = require("../middlewares/verify.middleware");
import { Router } from "express";
const router = Router();
const verifyToken = require("../middlewares/verifyToken.middleware");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyUser = require("../middlewares/verifyUser.middleware");
const verifyEmail = require("../middlewares/verifyEmail.middleware");
const verifyName = require("../middlewares/verifyName.middleware");
const verifyNewPassword = require("../middlewares/verifyNewPassword.middleware");
const verifySomatotype = require("../middlewares/verifySomatotype.middleware");
const {
  register,
  updateName,
  deleteUser,
  saveResults,
  updateEmail,
  updatePassword,
  sendResetEmail,
  getUserDatas,
  deleteSomatotype,
  editSomatotype,
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

router.post("/updateName", verifyKey, verifyToken, verifyName, updateName);

router.post(
  "/updatePassword",
  verifyKey,
  verifyToken,
  verifyNewPassword,
  updatePassword
);

router.get("/getUserDatas", verifyKey, verifyToken, getUserDatas);

router.delete(
  "/deleteSomatotype/:id",
  verifyKey,
  verifyToken,
  deleteSomatotype
);

router.post(
  "/editSomatotype/:id",
  verifyKey,
  verifyToken,
  verifySomatotype,
  editSomatotype
);

module.exports = router;
