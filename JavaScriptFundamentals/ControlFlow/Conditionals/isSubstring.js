// So far you've learned how to write your own loops but there are some methods that will
// iterate for you. One such method is the String.indexOf() method.

// Write a function isSubstring that takes in two strings, searchString and subString. The
// function should return true if subString is a part of thesearchString, regardless of upper or
// lower case, and false if otherwise.

function isSubstring(searchString, subString) {
    // your code here...
    let wholeString = searchString.toLowerCase();
    let partString = subString.toLowerCase();

    if (wholeString.indexOf(partString)!==-1){
        return true;
    }
    else {
        return false;
    }
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
