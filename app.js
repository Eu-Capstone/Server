const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const mbtiRouter = require("./api/mbti.js");
const { connectDB, disconnectDB } = require("./db/connect.js");

connectDB();

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

app.use("/api/mbti", mbtiRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "서버 오류" }); // 클라이언트에게 에러 응답 전송
});

process.on("SIGINT", () => {
  disconnectDB();
});

module.exports = app;
