import express from "express";
import {
  getMBTICount,
  incrementMBTICount,
  getMBTIResult,
} from "../controller/mbtiController.js";

const router = express.Router();

// router.use((req, res, next) => {
//   try {
//     connectDB();
//     next();
//   } catch (error) {
//     console.error(error);
//     next(error);
//   } finally {
//     disconnectDB();
//   }
// });

router.get("/result", getMBTIResult);
router.post("/result", incrementMBTICount);
router.get("/count", getMBTICount);

export default router;
