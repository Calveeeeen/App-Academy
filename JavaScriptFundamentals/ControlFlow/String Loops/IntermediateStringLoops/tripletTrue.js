/* Write a function tripletTrue that accepts a string as an argument. The function should
return a boolean indicating whether or not the the string contains three of the same character
consecutively. */

// Your code here
function tripletTrue(str){
    // loop thru the string
    for (i=0; i<str.length; i++){
        // set char equal the the character at a certain index;
        let char = str[i];
        // check if char is equal to it's next few letters
        if(str[i]==str[i+1]&&str[i]==str[i+2]){
            return true;
        }
    }
    return false;
}

console.log(tripletTrue('caaabb'));        // true
console.log(tripletTrue('terrrrrible'));   // true
console.log(tripletTrue('runninggg'));     // true
console.log(tripletTrue('bootcamp'));      // false
console.log(tripletTrue('e'));             // false
