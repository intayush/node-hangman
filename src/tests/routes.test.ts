import supertest from "supertest";
import { Players, PlayerDoc } from "../models/players";
import { app } from "../index";

const request = supertest(app);

describe("GET /move", () => {
  const mockDbData = {
    sessionId: "session-string",
    word: "teststring",
    correctIndexes: [],
    movesCount: 0,
    incorrectLetters: [],
    save: async () => {},
  };
  let sessionId = "";
  let wordLength = 0;

  Players.build = jest.fn().mockImplementation(() => mockDbData);
  Players.findOne = jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockDbData));
  it("gives correct data for new game", async () => {
    try {
      const result = await request.get("/api/move");
      expect(result.statusCode).toEqual(200);

      expect(result.body.movesCount).toBe(0);
      expect(result.body.incorrectLetters).toStrictEqual([]);
      expect(result.body.wordArray).toBeDefined();
      expect(result.body.sessionId).toBeDefined();
    } catch (err) {}
  });

  it("gives data for existing sessionId", async () => {
    const result = await request.get(
      `/api/move?sessionId=${mockDbData.sessionId}`
    );
    expect(result.statusCode).toEqual(200);
    expect(result.body.wordArray).toHaveLength(mockDbData.word.length);
  });

  it("gives updated word array for correct move", async () => {
    const result = await request.get(
      `/api/move?sessionId=${mockDbData.sessionId}&move=t`
    );
    expect(result.statusCode).toEqual(200);
    expect(result.body.wordArray).toStrictEqual([
      "t",
      "",
      "",
      "t",
      "",
      "t",
      "",
      "",
      "",
      "",
    ]);
  });

  it("gives updated movesCount and incorrectLetters for wrong move", async () => {
    const result = await request.get(
      `/api/move?sessionId=${mockDbData.sessionId}&move=z`
    );
    expect(result.statusCode).toEqual(200);
    expect(result.body.movesCount).toBe(1);
    expect(result.body.incorrectLetters).toStrictEqual(["z"]);
  });
});
