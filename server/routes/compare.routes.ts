import { Router } from "express";
const router = Router();

const { getAllComparisons } = require("../controllers/compare.controller");

router.get("/getAllComparisons", getAllComparisons);

module.exports = router;
