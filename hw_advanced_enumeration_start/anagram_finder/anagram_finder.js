const AnagramFinder = function (word) {
    this.word = word;

}

AnagramFinder.prototype.findAnagrams = function (otherWords) {

const orderedWord = this.word.toLowerCase().split('').sort().join('')
  const matchingOtherWords = otherWords.filter(word => word.toLowerCase().split('').sort().join('') === orderedWord && word !== this.word);
  return matchingOtherWords;
}

module.exports = AnagramFinder;
