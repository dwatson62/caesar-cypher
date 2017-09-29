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
  for (let i = 0; i < key; i ++) {
    if (letter === 'z') {
      letter = 'a'
    } else if (letter === 'Z') {
      letter = 'A'
    } else {
      letter = String.fromCharCode(letter.charCodeAt(0) + 1);
    }
  }
  return letter;
}

export let previousLetter = (letter, key) => {
  for (let i = 0; i < key; i ++) {
    if (letter === 'a') {
      letter = 'z'
    } else if (letter === 'A') {
      letter = 'Z'
    } else {
      letter = String.fromCharCode(letter.charCodeAt(0) - 1);
    }
  }
  return letter;
}
