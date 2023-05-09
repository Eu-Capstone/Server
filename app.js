import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";
import { default as MBTIRouter } from "./api/mbti.js";
import { connectDB } from "./db/connect.js";
import serverless from "serverless-http";

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

app.use("/", (req, res) => res.status(200).json({ hanwoosek: "api ssagae" }));

app.use("/api/mbti", MBTIRouter);

const handler = serverless(app);

export { handler };
