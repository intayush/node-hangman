import express from "express";
import mongoose from "mongoose";
import { json } from "body-parser";
import * as dotenv from "dotenv";

import hangmanRouter from "./routes/hangman";

dotenv.config();

const DB_HOSTNAME = process.env.DB_HOSTNAME ?? "localhost";
const DB_PORT = process.env.DB_PORT ?? "27017";

mongoose.connect(
  `mongodb://${DB_HOSTNAME}:${DB_PORT}/hangman`,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Connected to DB");
  }
);

const app = express();
app.use(json());
app.use(hangmanRouter);

app.listen(8000, () => {
  console.log("Hangman Server is listening");
});
