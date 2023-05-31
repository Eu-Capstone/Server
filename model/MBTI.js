const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mbtiSchema = new Schema({
  mbti: {
    type: String,
    enum: ["IFP", "IFJ", "ITP", "ITJ", "EFP", "EFJ", "ETP", "ETJ"],
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
