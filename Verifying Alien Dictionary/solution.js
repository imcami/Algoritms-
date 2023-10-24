const alphabet0 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const alphabet1 = [
  "f",
  "j",
  "d",
  "k",
  "s",
  "l",
  "a",
  "v",
  "g",
  "h",
  "z",
  "q",
  "i",
  "u",
  "m",
  "w",
  "p",
  "b",
  "x",
  "n",
  "c",
  "o",
  "y",
  "t",
  "r",
  "e",
];

function alienDictionary(wordsArray, dictionary, humanAlphabet) {
  // Crear un objeto de mapeo para una búsqueda eficiente
  let charMap = {};
  for (let i = 0; i < dictionary.length; i++) {
    charMap[dictionary[i]] = humanAlphabet[i];
  }

  let result = [];
  for (let i = 0; i < wordsArray.length; i++) {
    let word = wordsArray[i];
    let temp = [];
    for (let j = 0; j < word.length; j++) {
      // Manejar el caso donde el caracter no está en el diccionario
      if (!charMap[word[j]]) {
        throw new Error(`Character ${word[j]} is not in the dictionary`);
      }
      temp.push(charMap[word[j]]);
    }
    result.push(temp.join(""));
  }
  return result;
}

// Uso de la función:
const wordsArray = ["hello", "world"];
const result = alienDictionary(wordsArray, alphabet1, alphabet0);
console.log(result); // Salida: ["avyll", "dlihd"]
