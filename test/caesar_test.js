import {expect} from 'chai';
import {cypher, decypher, nextLetter, previousLetter, splitWord} from '../js/caesar';

describe('nextLetter', () => {
  it('returns next lower case letter based on key', () => {
    let letter = 'a';
    let key = 1;
    expect(nextLetter(letter, key)).to.equal('b');
  });

  it('returns next upper case letter based on key', () => {
    let letter = 'C';
    let key = 1;
    expect(nextLetter(letter, key)).to.equal('D');
  });

  it('can move by higher keys', () => {
    let letter = 'C';
    let key = 20;
    expect(nextLetter(letter, key)).to.equal('W');
  });

  it('wraps back to beginning once the end of the alphabet is reached', () => {
    let letter = 'z';
    let key = 1;
    expect(nextLetter(letter, key)).to.equal('a');
  });
});

describe('previousLetter', () => {
  it('returns previous lower case letter based on key', () => {
    let letter = 'b';
    let key = 1;
    expect(previousLetter(letter, key)).to.equal('a');
  });

  it('returns previous upper case letter based on key', () => {
    let letter = 'C';
    let key = 1;
    expect(previousLetter(letter, key)).to.equal('B');
  });

  it('can move by higher keys', () => {
    let letter = 'C';
    let key = 20;
    expect(previousLetter(letter, key)).to.equal('I');
  });

  it('wraps back to beginning once the end of the alphabet is reached', () => {
    let letter = 'a';
    let key = 1;
    expect(previousLetter(letter, key)).to.equal('z');
  });
});

describe('splitWord', () => {
  it('splits a word by characters', () => {
    let word = 'caesar';
    expect(splitWord(word)).to.eql(['c', 'a', 'e', 's', 'a', 'r']);
  });
});

describe('cypher', () => {
  it('correctly cyphers a word based on a key', () => {
    let word = 'caesar';
    let key = 3;
    expect(cypher(word, key)).to.equal('fdhvdu');
  });
});

describe('decypher', () => {
  it('correctly decyphers a word based on a key', () => {
    let word = 'fdhvdu';
    let key = 3;
    expect(decypher(word, key)).to.equal('caesar');
  });
});
