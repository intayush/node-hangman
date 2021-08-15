import axios from "axios";

const fallbackWords = [
  "indicator",
  "building",
  "banana",
  "apple",
  "application",
  "sports",
  "time",
];

const getWord = async () => {
  try {
    const { data } = await axios.get(
      "https://random-word-api.herokuapp.com/word?number=1"
    );
    const word =
      Array.isArray(data) && data.length
        ? data[0]
        : fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
    return word;
  } catch (error) {
    return fallbackWords[Math.floor(Math.random() * fallbackWords.length)];
  }
};

export default getWord;