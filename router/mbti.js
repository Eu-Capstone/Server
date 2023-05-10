const {
  getMBTICount,
  incrementMBTICount,
  getMBTIResult,
} = require("../controller/mbtiController.js");

const express = require("express");

const router = express.Router();

router.get("/api/mbti/result", getMBTIResult);
router.post("/api/mbti/result", incrementMBTICount);
router.get("/api/mbti/count", getMBTICount);

module.exports = router;
