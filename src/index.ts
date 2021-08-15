import express from "express";
import path from "path";
import { json } from "body-parser";
import { connectToDb }  from "./db"
import hangmanRouter from "./routes/hangman";

connectToDb();
export const app = express();
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
