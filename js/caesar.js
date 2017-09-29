export let cypher = (word, key) => {
  let splitWord = word.split('');
  let cypheredWord = splitWord.map(letter => nextLetter(letter, key));
  return cypheredWord.join('');
}

export let decypher = (word, key) => {
  let splitWord = word.split('');
  let cypheredWord = splitWord.map(letter => previousLetter(letter, key));
  return cypheredWord.join('');
}

export let nextLetter = (letter, key) => {
  return String.fromCharCode(letter.charCodeAt(0) + parseInt(key));
}

export let previousLetter = (letter, key) => {
  return String.fromCharCode(letter.charCodeAt(0) - parseInt(key));
}
