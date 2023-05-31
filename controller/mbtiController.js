const { connectDB } = require("../db/connect.js");
const MBTI = require("../model/MBTI.js");
const COUNT = require("../model/user.js");

const mbtiList = ["IFP", "IFJ", "ITP", "ITJ", "EFP", "EFJ", "ETP", "ETJ"];

const incrementMBTICount = async (req, res) => {
  const { mbti } = req.body;
  try {
    if (!mbtiList.includes(mbti)) {
      throw new Error("Invalid mbti value");
    }
    connectDB();
    await MBTI.findOneAndUpdate(
      { mbti },
      { $inc: { count: 1 } },
      { upsert: true }
    );

    await COUNT.findOneAndUpdate(
      {},
      { $inc: { userCount: 1 } },
      { upsert: true, new: true }
    );
    res.status(200).json({ success: "성공적으로 반영되었습니다" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMBTICount = async (req, res) => {
  try {
    connectDB();
    const count = await COUNT.findOne();
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMBTIResult = async (req, res) => {
  try {
    connectDB();
    const mbtis = await MBTI.find();
    const userCount = await COUNT.findOne();
    res.status(200).json({ mbtis, userCount });
  } catch (error) {
    throw new Error("Failed to get MBTI list");
  }
};

module.exports = { incrementMBTICount, getMBTICount, getMBTIResult };
