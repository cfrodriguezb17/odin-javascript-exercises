let palindromes = function (quote) {
  let invertQuote = '';
  quote = quote.toLowerCase();
  // creo que hace doble comprobacion
  quote = quote.replaceAll(/\s/g,'');
  quote = quote.replace(/[.,/#!$%^&*;:{}=-_`~()]/g, "").replace(/s{2,}/g, " ");
  for(let i = quote.length;i  >= 0; i--){
    invertQuote = invertQuote + quote.charAt(i);
  }
  if (quote == invertQuote) {
    return true
  }else{
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;