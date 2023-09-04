/* Write a function shortestWord that accepts a sentence as an argument. The
function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence. */

// Your code here
function shortestWord(sent){
    let words = sent.split(" ");
    let shortestWords = words[0];
    for(let i = words.length-1; i>=0; i--){
        let word = words[i]
        if (word.length<shortestWords.length){
            shortestWords = word;
        }
    }
    return shortestWords;
}


console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'
