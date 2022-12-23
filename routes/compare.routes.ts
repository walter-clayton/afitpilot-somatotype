import { Router } from "express";
const router = Router();

const { getAll } = require("../controllers/compare.controller");

router.get("/getAll", getAll);

module.exports = router;
