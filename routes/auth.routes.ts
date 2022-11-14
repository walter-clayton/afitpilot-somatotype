import { Router } from "express";
const router = Router();

const { login } = require("../controllers/auth.controller");
const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyFields = require("../middlewares/verifyFieldsLogin.middleware");

router.get("/login", verifyKey, verifyFields, login);

module.exports = router;
