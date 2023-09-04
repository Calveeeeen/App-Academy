/* Write a function lastIndex that takes in a string and a character. The function should
return the last index where the character can be found in the string. */

function lastIndex(str, char) {
    // your code here

    for (let i=str.length; i>=0; i--){
        let index=str.lastIndexOf(char);
        if (char.includes(str)){
            return index;
        }
        return index;
    }
}

console.log(lastIndex("abca", "a"))        // 3
console.log(lastIndex("mississipi", "i"))  // 9
console.log(lastIndex("octagon", "o"))     // 5
console.log(lastIndex("programming", "m")) // 7
