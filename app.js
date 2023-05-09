import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { default as MBTIRouter } from "./router/mbti.js";
import { connectDB } from "./db/connect.js";

// import postRouter from "./router/tldr.js";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("combined"));
app.use(helmet());

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

app.listen(8080);
