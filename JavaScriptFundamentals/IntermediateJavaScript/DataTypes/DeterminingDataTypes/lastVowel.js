/* Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string.
Note that the string may contain capitalization.

Hint: You may find the String.toLowerCase() or String.toUpperCase() methods useful. */

// your code here
function lastVowel(str){
    lowerCase= str.toLowerCase();
    vowels = 'aeiou';
    for(let i=str.length; i>=0; i--){
        let char = lowerCase[i];
        if(vowels.includes(char)){
            return str[i];
        }
    }
    return null;
}


console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null
