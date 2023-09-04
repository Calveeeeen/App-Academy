/* Write a function, countVowels(word), that takes in a string word and returns
the number of vowels in the word. Vowels are the letters "a", "e", "i", "o", "u". */

function countVowels(word) {
    // your code here...
    let vowels = 'aeiou';
    let counter = 0;
    for (let i = 0; i<word.length; i++){
        let letter = word[i];
        if(vowels.includes(letter)){
            counter++
        }
    }
    return counter;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
