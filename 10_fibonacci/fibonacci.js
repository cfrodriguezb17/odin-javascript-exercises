const fibonacci = function(num) {
  if(num < 0) return 'OOPS'
  if(typeof num === 'string') num = Number(num)
  if(num == 1) return 1
  let num0 = 0;
  let num1 = 1;
  let res;
  if(num > 0){
    for(let i = 0; i < num - 1; i++){
      res = num0 + num1;
      num0 = num1;
      num1 = res;
    }
  }
  return res;
};

// Do not edit below this line
module.exports = fibonacci;
