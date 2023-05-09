import MBTI from "../model/MBTI.js";
import COUNT from "../model/user.js";

const mbtiList = [
  "ISTJ",
  "ISFJ",
  "INFJ",
  "INTJ",
  "ISTP",
  "ISFP",
  "INFP",
  "INTP",
  "ESTP",
  "ESFP",
  "ENFP",
  "ENTP",
  "ESTJ",
  "ESFJ",
  "ENFJ",
  "ENTJ",
];

const incrementMBTICount = async (req, res) => {
  const { mbti } = req.body;
  try {
    if (!mbtiList.includes(mbti)) {
      throw new Error("Invalid mbti value");
    }
    const result = await MBTI.findOneAndUpdate(
      { mbti },
      { $inc: { count: 1 } },
      { upsert: true }
    );

    await COUNT.findOneAndUpdate(
      {},
      { $inc: { userCount: 1 } },
      { upsert: true, new: true }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMBTICount = async (req, res) => {
  try {
    const count = await COUNT.findOne();
    res.status(200).json(count);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMBTIResult = async (req, res) => {
  try {
    const mbtis = await MBTI.find();
    const userCount = await COUNT.findOne();

    res.status(200).json({ mbtis, userCount });
  } catch (error) {
    throw new Error("Failed to get MBTI list");
  }
};

export { incrementMBTICount, getMBTICount, getMBTIResult };
