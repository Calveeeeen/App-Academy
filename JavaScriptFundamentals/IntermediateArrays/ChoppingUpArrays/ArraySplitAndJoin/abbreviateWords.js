/* Write a function abbreviateWords(sentence) that takes in a sentence string. The
function should return a new sentence where words that are longer than 4 characters
have their vowels removed. Hint: Consider creating a helper function to remove all
vowels in a string. */

// your code here
function removeVowels(str){
    let vowels = 'aeiou';
    let newWord=''
    for(let i=0; i<str.length;i++){
        let char = str[i];
        if(!vowels.includes(char)){
            newWord+=char;
        }
    }
    return newWord;
}
function abbreviateWords(sentence){
    let newSent = [];
    let words = sentence.split(" ")
    for(let t=0; t<words.length; t++){
        let word = words[t];
        if(word.length>4){
            newSent.push(removeVowels(word));
        }
        else{
            newSent.push(word);
        }
    }
    return newSent.join(" ");
}


console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg
