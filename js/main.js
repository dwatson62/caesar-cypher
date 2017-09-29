import * as caesar from './caesar';

document.getElementById('cypherButton').addEventListener('click', () => {
  let word = document.getElementById('word').value;
  let cypheredWord = caesar.cypher(word);
  document.getElementById('word').value = cypheredWord;
});
