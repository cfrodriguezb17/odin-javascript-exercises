const add = function(a, b) {
	let res = a + b;
  return res;
};

const subtract = function(a, b) {
	let res = a - b;
  return res;
};

const sum = function(array) {
  let res = 0;
  if(array.length > 0){
    for(const num of array){
      res += num;
    }
  }
  return res;
};

const multiply = function(array) {
  let res = 0;
  if(array.length > 0){
    res = array[0];
    for(let i = 1;i < array.length; i++){
      res *= array[i];
    }
  }
  return res;
};

const power = function(a, b) {
  let res = a ** b;
  return res;
};

const factorial = function(num) {
  let res = 1;
  if(num > 1){
    for(let i = 1; i < num + 1; i++){
      res *= i;
    }
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
