const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let arr=[];
  let range = 11*increment;
  for(let i=increment; i<range; i+=increment){
    let sum = addNums(i);
    arr.push(sum);
  }
  console.log(arr);
  return arr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  const results = [];
  let value = 0;
  for (let i = 0; i < 10; i++) {
      value += increment;
      results.push(addManyNums(value));
  }
  return results;
}

module.exports = [addNums10, addManyNums10];
