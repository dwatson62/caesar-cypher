export let cypher = (word) => {
  let splitWord = word.split('');
  let cypheredWord = splitWord.map(letter => nextLetter(letter));
  return cypheredWord.join('');
}

export let decypher = (word) => {
  let splitWord = word.split('');
  let cypheredWord = splitWord.map(letter => previousLetter(letter));
  return cypheredWord.join('');
}

export let nextLetter = (letter) => {
  const key = 1;
  return String.fromCharCode(letter.charCodeAt(0) + key);
}

export let previousLetter = (letter) => {
  const key = 1;
  return String.fromCharCode(letter.charCodeAt(0) - key);
}
