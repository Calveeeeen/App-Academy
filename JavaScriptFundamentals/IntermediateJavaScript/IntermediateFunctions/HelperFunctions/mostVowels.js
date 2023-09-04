/* Write a function mostVowels that takes in a sentence string and returns the word of the
sentence that contains the most vowels. */

function vowelCount(word){
    let counter=0;
    let vowels='aeiou';
    for (let i=0; i<word.length;i++){
        if(vowels.includes(word[i])){
            counter++
        }
    }
    return counter;
}

function mostVowels(sentence) {
    // your code here
    let most = 0;
    let words = sentence.split(" ");

    for (let t=0; t<words.length; t++){
        if(vowelCount(words[t]) > most){
            most = t;
        }
    }
    return words[most];
}

console.log(mostVowels("what a wonderful life")); // "wonderful"
