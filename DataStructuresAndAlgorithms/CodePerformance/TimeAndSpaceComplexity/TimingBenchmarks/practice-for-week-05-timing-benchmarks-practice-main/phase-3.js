const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  function addNums10(increment) {
    // Fill this in
    let arr=[];
    let range = 11*increment;
    for(let i=increment; i<range; i+=increment){
      let sum = addNums(i);
      arr.push(sum);
    }

    return arr;
  }
  console.time("timer1");
  // Then, add timing code
  console.timeLog("timer1");
  // Your code here
  console.timeEnd("timer1");
}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
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
  console.time("timer2");
  // Then, add timing code
  console.timeLog("timer2");
  // Your code here
  console.timeEnd("timer2");

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
