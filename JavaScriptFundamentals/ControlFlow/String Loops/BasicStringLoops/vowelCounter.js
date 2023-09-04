/* Write a function, countVowels(word), that takes in a string word and returns the number of
vowels in the word.

Vowels are the letters "a", "e", "i", "o", "u". */

function countVowels(word) {
    // your code here...
    let i=0;
    let count=0;
    while (i<word.length){
        let char=word[i];
        if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
            count+=1;
        }
        i++
    }
    return count;
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
