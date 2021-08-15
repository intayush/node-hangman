import express, { Request, Response } from "express";
import getWord from "../utils/getWord";
import {
  PlayerDoc,
  createNewPlayer,
  findPlayer,
  updatePlayerData,
  resetPlayerData,
} from "../models/players";

interface MoveRequest {
  move: string;
  sessionId: string;
  reset: string;
}

const router = express.Router();

router.get(
  "/api/move",
  async (req: Request<any, any, any, MoveRequest>, res: Response) => {
    try {
      let { move, sessionId, reset } = req.query;
      let player: PlayerDoc | string;
      if (!sessionId || !sessionId.length) {
        const word = await getWord();
        player = await createNewPlayer({ word });
      } else if (reset?.length) {
        const word = await getWord();
        player = await resetPlayerData({ word, sessionId });
      } else if (!move?.length) {
        player = await findPlayer({ sessionId });
      } else {
        player = await updatePlayerData({ sessionId, move });
      }
      if (typeof player === "string") {
        throw player;
      }
      const { word, correctIndexes, movesCount, incorrectLetters } = player;
      const wordArray = word.split("").map((letter, index) => {
        return correctIndexes.includes(index) ? letter : "";
      });
      sessionId = player.sessionId;
      return res.send({
        sessionId,
        wordArray,
        movesCount,
        incorrectLetters
      });
    } catch (error) {
      console.error(error);
      if (error === "Player not found") {
        res.status(404).send({
          message: "Player not found",
        });
      }
      res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
);

export default router;
