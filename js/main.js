import * as caesar from './caesar';

document.getElementById('cypherButton').addEventListener('click', () => {
  let word = document.getElementById('word').innerHTML;
  let cypheredWord = caesar.cypher(word);
  console.log(cypheredWord);
});
