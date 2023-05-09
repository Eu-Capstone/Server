import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { default as MBTIRouter } from "./router/mbti.js";
import { connectDB } from "./db/connect.js";
import serverless from "serverless-http";

// import postRouter from "./router/tldr.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(helmet());

app.use("/", (req, res) => {
  res.send("<h1>EU CAPSTONE API 싸개</h1>");
});

app.use(
  cors({
    origin: "*", // 허용할 origin
    optionsSuccessStatus: 200, // 기본 요청 success code
    credentials: true, // reqeust credential이 포함되있을 경우 response에서 보여줄지 아닐지
  })
);

await connectDB();

app.use("/api/mbti", MBTIRouter);

// app.use("/posts", (req, res) => {
//   res.sendStatus(404);
// });

module.exports.handler = serverless(app);
