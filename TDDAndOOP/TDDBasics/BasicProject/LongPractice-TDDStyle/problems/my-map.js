function myMap(inputArray, callback) {
  // Your code here
  let newArr = [];
  for(let i=0; i<inputArray.length; i++){
    let el = inputArray[i];
    let res = callback(el);
    newArr.push(res);
  }
  return newArr;
}


double = (el) => el * 2;
myMap([1,2,3], double)

module.exports = myMap;
