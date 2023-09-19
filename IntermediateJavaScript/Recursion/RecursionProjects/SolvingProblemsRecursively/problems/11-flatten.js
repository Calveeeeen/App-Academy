/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(arr){
  if(arr.length = 0){
    return [];
  }
  else if(arr.length > 0){
    for (let i= 0; i< arr.length; i++){
      let el = arr[i];
      let newArr = [];
      if(Array.isArray(el)){
        return flatten(el);
      }
      if(!Array.isArray(el)){
        newArr.push(el)
        return flatten(arr.slice(1));
      }
    }
    return newArr;
  }


}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
