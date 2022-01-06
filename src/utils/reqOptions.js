const axios = require("axios").default;

// export const getRandomWords = async () => {
//   try {
//     const words = await axios.get("http://localhost:9090/random-words");
//     return words.data.words;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const getWordDefinition = async (word) => {
//   try {
//     const wordDef = await axios.get(
//       "http://localhost:9090/word-definition",

//       {
//         word,
//       }
//     );
//     return wordDef.data.definition;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getRandomWords = async () => {
  try {
    const words = await axios.get(
      `https://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=11&api_key=${process.env.REACT_APP_API_KEY}`
    );
    return words.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWordDefinition = async (word) => {
  try {
    const wordDef = await axios.get(
      `https://api.wordnik.com/v4/word.json/${word}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${process.env.REACT_APP_API_KEY}`
    );

    console.log(wordDef, "=====================", process.env.REACT_APP_TEST);

    return wordDef.data[0].text;
  } catch (error) {
    console.log(error);
  }
};
