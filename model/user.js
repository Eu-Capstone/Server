import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userCount: {
    type: Number,
    default: 0,
  },
});

const COUNT = mongoose.model("count", userSchema);

export default COUNT;
