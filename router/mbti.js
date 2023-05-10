const {
  getMBTICount,
  incrementMBTICount,
  getMBTIResult,
} = require("../controller/mbtiController.js");

const express = require("express");

const router = express.Router();

router.get("/result", getMBTIResult);
router.post("/result", incrementMBTICount);
router.get("/count", getMBTICount);

module.exports = router;
