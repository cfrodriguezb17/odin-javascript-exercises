const repeatString = function(word, num) {
  let result = word;
  if (num == 0)
    return ''
  else if(num < 1)
    return "ERROR"
  else
    for(let i = 0; i < num - 1; i++){
      result += word
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
