const UpperCaser = function (words) {
    this.words = words;
}

UpperCaser.prototype.toUpperCase = function () {

    const upperCase = this.words.map(word => word.toUpperCase())
  return upperCase
}

module.exports = UpperCaser;
