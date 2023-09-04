/* Write a function reverseSentence(sentence) that takes in a sentence as an arg. The
function should return a new sentence where the order of the words is reversed. Note
that you should reverse the order among words, not the order among characters. */

// your code here
function reverseSentence(sent){
    let newSent = [];
    let words = sent.split(" ");
    for(let i=words.length-1; i>=0; i--){
        let word = words[i];
        newSent.push(word);
    }
    return newSent.join(" ");
}


console.log(reverseSentence('I am pretty hungry')); // 'hungry pretty am I'
console.log(reverseSentence('follow the yellow brick road')); // 'road brick yellow the follow'
