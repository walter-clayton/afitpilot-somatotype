// const verify = require("../middlewares/verify.middleware");
import { Request, Response, Router } from "express";
const router = Router();
const verifyToken = require("../middlewares/verifyToken.middleware");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyUserRegister = require("../middlewares/verifyUserRegister.middleware");
const verifyFields = require("../middlewares/verifyFieldsRegister.middleware");
const {
  register,
  getUser,
  deleteUser,
} = require("../controllers/users.controller");
const Somatotype = require("../models/Somatotype");
const User = require("../models/User");

router.get("/getUser", verifyToken, getUser);
router.post("/register", verifyKey, verifyFields, verifyUserRegister, register);
router.delete("/deleteUser", verifyToken, deleteUser);

module.exports = router;
