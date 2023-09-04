/* Write a function vowelCipher that takes in a string and returns a new string where every
vowel becomes the next vowel in the alphabet. */

function vowelCipher(string) {
    // your code here
    const vowels = 'aeiou';
    let newString='';
    for (let i =0; i<string.length; i++){
        let char= string[i];
        if(!vowels.includes(char)){
            newString+=char;
        }
        else if (vowels.includes(char)){
            let oldVowelIndex = vowels.indexOf(char);
            let newVowelIndex=oldVowelIndex+1;
            let newChar=vowels[newVowelIndex%vowels.length];
            newString+=newChar;
        }
    }
     return newString;
}


console.log(vowelCipher("bootcamp")); // "buutcemp"
console.log(vowelCipher("paper cup")); // "pepir cap"
