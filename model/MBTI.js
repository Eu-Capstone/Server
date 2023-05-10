const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mbtiSchema = new Schema({
  mbti: {
    type: String,
    enum: [
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
    ],
    unique: true,
    required: true,
    versionKey: false,
  },
  count: {
    type: Number,
    default: 0,
  },
});

const MBTI = mongoose.model("mbti", mbtiSchema);

module.exports = MBTI;
