import * as caesar from './caesar';

var select = document.getElementById('key');

for (let i = 1; i < 26; i ++) {
  let opt = document.createElement('option');
  opt.value = i;
  opt.innerHTML = i;
  select.appendChild(opt);
}

document.getElementById('cypherButton').addEventListener('click', () => {
  let word = document.getElementById('word').value;
  let key = document.getElementById('key').value;
  let cypheredWord = caesar.cypher(word, key);
  document.getElementById('word').value = cypheredWord;
});

document.getElementById('decypherButton').addEventListener('click', () => {
  let word = document.getElementById('word').value;
  let key = document.getElementById('key').value;
  let cypheredWord = caesar.decypher(word, key);
  document.getElementById('word').value = cypheredWord;
});
