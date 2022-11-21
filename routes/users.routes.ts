// const verify = require("../middlewares/verify.middleware");
import { Router } from "express";
const router = Router();
const verifyToken = require("../middlewares/verifyToken.middleware");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyUser = require("../middlewares/verifyUser.middleware");
const verifyEmail = require("../middlewares/verifyEmail");
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

router.post("/register", verifyKey, verifyEmail, verifyUser, register);
router.delete("/deleteUser", verifyToken, verifyEmail, deleteUser);
router.post(
  "/forgotPassword",
  verifyKey,
  verifyEmail,
  verifyUser,
  sendResetEmail
);
router.post("/saveResults", verifyToken, saveResults);

// router.post("/updateEmail", verifyToken, verifyEmail, updateEmail);
// router.post(
//   "/updatePassword",
//   verifyToken,
//   verifyFieldsPassword,
//   updatePassword
// );

// router.post("/resetPassword", verifyKey, verifyFieldsResetPass, verifyToken, resetPassword);

module.exports = router;
