export let cypher = (word, key) => {
  return splitWord(word).map(letter => nextLetter(letter, key)).join('');
}

export let decypher = (word, key) => {
  return splitWord(word).map(letter => previousLetter(letter, key)).join('');
}

export let splitWord = (word) => {
  return word.split('');
}

export let nextLetter = (letter, key) => {
  return transposeLetter(letter, parseInt(key));
}

export let previousLetter = (letter, key) => {
  return transposeLetter(letter, parseInt(key) * -1);
}

export let transposeLetter = (letter, key) => {
  return String.fromCharCode(letter.charCodeAt(0) + key);
}
