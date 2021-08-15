export default interface PlayerData {
    sessionId: string;
    word: string;
    correctIndexes: number[];
    movesCount: number;
    incorrectLetters: string[];
};