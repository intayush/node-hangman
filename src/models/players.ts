import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
import IPlayerData from "../typings/PlayerData";

interface PlayerDoc extends mongoose.Document, IPlayerData {}

interface PlayersModel extends mongoose.Model<PlayerDoc> {
  build(attr: Pick<IPlayerData, "sessionId" | "word">): PlayerDoc;
}

const PlayersSchema = new mongoose.Schema<PlayerDoc>({
  sessionId: {
    type: String,
    required: true,
    unique: true,
  },
  word: {
    type: String,
    default: "",
  },
  correctIndexes: {
    type: Array,
    default: [],
  },
  movesCount: {
    type: Number,
    default: 0,
  },
  incorrectLetters: {
    type: Array,
    default: [],
  },
});

PlayersSchema.statics.build = (
  attr: Pick<IPlayerData, "sessionId" | "word">
) => {
  return new Players(attr);
};

const Players = mongoose.model<PlayerDoc, PlayersModel>(
  "Players",
  PlayersSchema
);

const createNewPlayer = async ({
  word,
}: {
  word: string;
}): Promise<PlayerDoc | string> => {
  try {
    const playerDoc = Players.build({
      sessionId: uuid(),
      word,
    });
    await playerDoc.save();
    return playerDoc;
  } catch (error) {
    return String(error);
  }
};

const findPlayer = async ({
  sessionId,
}: {
  sessionId: string;
}): Promise<PlayerDoc | string> => {
  try {
    const playerDoc = await Players.findOne({
      sessionId,
    });
    if (!playerDoc) {
      throw "Player not found";
    }
    return playerDoc;
  } catch (error) {
    return String(error);
  }
};

const updatePlayerData = async ({
  sessionId,
  move,
}: {
  sessionId: string;
  move: string;
}): Promise<PlayerDoc | string> => {
  try {
    const player = await findPlayer({ sessionId });
    if (typeof player === "string") {
      throw player;
    }
    let indexOfMove = player.word.indexOf(move);
    if (indexOfMove === -1 && !player.incorrectLetters.includes(move)) {
      player.incorrectLetters = [...player.incorrectLetters, move];
      player.movesCount = player.movesCount + 1;
    }
    while (indexOfMove != -1) {
      player.correctIndexes.push(indexOfMove);
      indexOfMove = player.word.indexOf(move, indexOfMove + 1);
    }
    await player.save();
    return player;
  } catch (error) {
    return error;
  }
};

const resetPlayerData = async ({
  word,
  sessionId,
}: {
  word: string;
  sessionId: string;
}): Promise<PlayerDoc | string> => {
  try {
    const player = await findPlayer({
      sessionId,
    });
    if (typeof player === "string") {
      throw player;
    }
    player.movesCount = 0;
    player.word = word;
    player.correctIndexes = [];
    player.incorrectLetters = [];
    await player.save();
    return player;
  } catch (error) {
    return error;
  }
};
export {
  Players,
  PlayerDoc,
  createNewPlayer,
  findPlayer,
  updatePlayerData,
  resetPlayerData,
};
