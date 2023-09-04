/* Write a function removeLastVowel(word) that takes in a string and returns the string
with its last vowel removed. */

// your code here
function removeLastVowel(word){
    let vowels = 'aeiou';
    for (let i = word.length-1; i>=0; i--){
        let letter = word[i];
        if(vowels.includes(letter)){
            let firstHalf = word.slice(0,i)
            let secondHalf=word.slice(i+1,word.length);
            return newWord = firstHalf + secondHalf
        }
    }
    return word;
}


console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'
