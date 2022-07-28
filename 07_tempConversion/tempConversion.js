const ftoc = function(far) {
  let conv = (far - 32) * 5 / 9
  conv = Number(conv.toFixed(1))
  return conv
};

const ctof = function(cel) {
  let conv = (cel * 9 / 5) + 32
  conv = Number(conv.toFixed(1))
  return conv
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
