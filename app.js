const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const MBTIRouter = require("./router/mbti.js");
const { connectDB } = require("./db/connect.js");

const app = express();

connectDB();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(helmet());

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use("/", (req, res) => res.status(200).json({ success: "!!" }));

app.use("/api/mbti", MBTIRouter);

module.exports = app;
