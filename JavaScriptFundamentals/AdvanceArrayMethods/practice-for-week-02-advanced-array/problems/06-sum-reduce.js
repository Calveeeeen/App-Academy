/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

*/

function sumWithReduce(nums){
    if(nums.length == 0){
      return 0;
    }
    else{
      let total = nums.reduce(function(accum, el){
        return accum + el;
      });
      return total;
    }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
module.exports = sumWithReduce;
} catch (e) {
module.exports = null;
}
