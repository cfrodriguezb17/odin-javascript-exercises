const reverseString = function(word) {
  if (word != '') {
    let lengthString = word.length - 1;
    let wordReverse = word[lengthString];
    for(let i = lengthString - 1; i >= 0; i--){
      wordReverse += word[i]
    }
    return wordReverse
  } else {
    return word
  }
};

// Do not edit below this line
module.exports = reverseString;
