const getTheTitles = function(objetos) {
  let titles = [];
  for(let prop in objetos){
    titles.push(objetos[prop]['title']);
  }
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
