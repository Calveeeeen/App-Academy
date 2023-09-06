/*

Write a function `twoDimensionalProduct(array)` that takes in a 2D array of
numbers as an argument. The function should return the total product of all
numbers multiplied together.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:


let arr1 = [
  [6, 4],
  [5],
  [3, 1]
];
console.log(twoDimensionalProduct(arr1)); // 360

let arr2 = [
  [11, 4],
  [2]
];
console.log(twoDimensionalProduct(arr2)); // 88

*/

// try using map to get the subArr and then reduce the subArr to get the product
// and replace the subArr with the product. then reduce the newly replaced subarr
// to get the final value
function twoDimensionalProduct(arr){
    let subArr = arr.map(function(el){
      let subArrProduct = el.reduce(function(accum, value){
        return accum * value;
      });
      return subArrProduct;
    });
    let product = subArr.reduce(function(value1, value2){
      return value1*value2;
    })
    return product;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = twoDimensionalProduct;
} catch (e) {
    module.exports = null;
}
