const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const MBTIRouter = require("./api/mbti.js");
const { connectDB } = require("./db/connect.js");

const app = express();

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

connectDB();

app.use("/api/mbti", MBTIRouter);

app.use("/", (req, res) => res.status(202).json({ wooseok: "api ssagae" }));

module.exports = app;
