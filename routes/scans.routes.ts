import { Router } from "express";
const router = Router();

const verifyKey = require("../middlewares/verifyKey.middleware");
const verifyNewScan = require("../middlewares/verifyNewScan.middleware");
const verifyToken = require("../middlewares/verifyToken.middleware");
const { newScan, resultScan } = require("../controllers/scans.controller");

router.post("/new", verifyKey, verifyNewScan, newScan);
router.get("/result", verifyKey, resultScan);

module.exports = router;
