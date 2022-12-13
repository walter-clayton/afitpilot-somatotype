import { Router } from "express";
const router = Router();

const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyNewScan = require("../middlewares/verifyNewScan.middleware");
const verifyToken = require("../middlewares/verifyToken.middleware");
const { newScan } = require("../controllers/scans.controller");

router.post("/new", verifyKey, verifyNewScan, newScan);

module.exports = router;
