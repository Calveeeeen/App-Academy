/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here
function addToTwelve(arr, i=0){
  let el1 = arr[i];
  let el2 = arr[i+1];
  let sum = el1 + el2;

  if(arr.length==1){
    return false;
  }
  else if(arr.length > 1 && i < arr.length-1){
    if (sum == 12){
      return true;
    }
    else{
      return addToTwelve(arr, i+1);
    }
  }
  return false;
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
