import express from "express";
import path from "path";
import mongoose from "mongoose";
import { json } from "body-parser";
import * as dotenv from "dotenv";

import hangmanRouter from "./routes/hangman";

dotenv.config();

const {
  LOCAL_DB_HOSTNAME,
  LOCAL_DB_PORT,
  REMOTE_DB,
  REMOTE_DB_HOSTNAME,
  REMOTE_DB_USERNAME,
  REMOTE_DB_PASSWORD,
  DB_NAME,
} = process.env;

const connectionString = REMOTE_DB
  ? `mongodb+srv://${REMOTE_DB_USERNAME ?? "hangman"}:${
      REMOTE_DB_PASSWORD ?? "Demo@123"
    }@${REMOTE_DB_HOSTNAME ?? "cluster0.kcnpb.mongodb.net"}/${
      DB_NAME ?? "hangman"
    }?retryWrites=true&w=majority`
  : `mongodb://${LOCAL_DB_HOSTNAME ?? "localhost"}:${
      LOCAL_DB_PORT ?? "27017"
    }/${DB_NAME ?? "hangman"}`;

mongoose.connect(
  connectionString,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (db) => {
    console.log(db);
    console.log("Connected to DB");
  }
);

const app = express();
app.use(json());
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../build')));

app.use(hangmanRouter);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Hangman Server is listening");
});
