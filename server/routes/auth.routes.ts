import { Router } from "express";
const router = Router();

const { login } = require("../controllers/auth.controller");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyEmail = require("../middlewares/verifyEmail.middleware");
const verifyPassword = require("../middlewares/verifyPassword.middleware");

router.post("/login", verifyKey, verifyEmail, verifyPassword, login);

module.exports = router;
