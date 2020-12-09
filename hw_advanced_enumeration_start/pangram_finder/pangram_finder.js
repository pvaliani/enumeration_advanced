const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase;
}

PangramFinder.prototype.isPangram = function () {

  const phraseArray = this.phrase.split('');
  const phraseArrayLowerCase = phraseArray.map(letter => letter.toLowerCase());
  const pangram = this.alphabet.every(letter => phraseArrayLowerCase.includes(letter))
  
  return pangram

}

module.exports = PangramFinder;
