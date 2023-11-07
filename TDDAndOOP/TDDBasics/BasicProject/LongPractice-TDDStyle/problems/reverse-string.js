// function reverseString(string) {
//   // Your code here
//   let lettersArr = string.split("");
//   let newArr = [];

//   for(let i = lettersArr.length-1; i>=0; i--){
//     let letter = lettersArr[i];
//     newArr.push(letter);
//   }

//   let newString = newArr.join("");

//   return newString;
// };

function reverseString(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Input is not a string');
  }

  let lettersArr = string.split("");
  let revStr = lettersArr.reverse()
  return revStr.join("");

}

module.exports = reverseString;
