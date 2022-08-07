let findTheOldest = function(people) {
  let prevPerson = people[0];
  let prevPersonAge;
  if (people[0].yearOfDeath === undefined) {
    prevPersonAge = new Date().getFullYear() - people[0].yearOfBirth;
  }else{
    prevPersonAge = people[0].yearOfDeath - people[0].yearOfBirth;
  }
  for (let i = 1; i < people.length; i++) {
    let personAge;
    if (people[i].yearOfDeath === undefined) {
      personAge = new Date().getFullYear() - people[i].yearOfBirth;
    }else{
      personAge = people[i].yearOfDeath - people[i].yearOfBirth;
    }
    if(prevPersonAge < personAge){
      prevPerson = people[i];
      prevPersonAge = personAge;
    }
  }
  return prevPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
