// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// Your code here
function repeatingTranslate(sent){
    let words = sent.split(" ");
    let newWords = [];
    let double = "";
    let vowel = "aeiou";
    let newWord ='';
    for(let i =0; i<words.length; i++){
        let word = words[i];
        if (word.length < 3){
            newWords.push(word);
        }
        else if(word.length>=3){
            if(vowel.includes(word[word.length-1])){
                double = word + word
                newWords.push(double);
            }
            else if(!vowel.includes(word[word.length-1])){
                newWord = nonVowel(word);
                newWords.push(newWord);

            }
        }
    }
    return newWords.join(" ")
}
function nonVowel(word){
    let vowels='aeiou';
    let newWord = ""
    for(let i=word.length-1; i>=0; i--){
        let char = word[i];
        if(vowels.includes(char)){
            let firstHalf = word.slice(0,i);
            let secondHalf = word.slice(i);
            let newWord = firstHalf+secondHalf+secondHalf;
            return newWord;
        }

    }
}

console.log(nonVowel("fast"))

console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash"
console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"
