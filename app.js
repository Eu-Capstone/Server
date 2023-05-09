import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { default as MBTIRouter } from "./router/mbti.js";
import { connectDB } from "./db/connect.js";
import serverless from "serverless-http";

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
    origin: "*",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

connectDB();

app.use("/api/mbti", MBTIRouter);

const handler = serverless(app);
export { handler };
