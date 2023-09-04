/* Write a function removeEWords(sentence) that accepts a sentence string as an arg.
The function should return a new string, containing only the words that don't have
the letter "e" in them. */

// your code here
function removeEWords(sentence){
    let newSentence = sentence.toLowerCase();
    let arr = newSentence.split(" ");
    let newArr=[];
    for (let i =0; i<arr.length; i++){
        let word = arr[i];
        if (!word.includes('e')){
            newArr.push(word);
        }
    }
    return newArr.join(' ')
}


console.log(removeEWords('What time is it everyone?')); // 'What is it'
console.log(removeEWords('Enter the building')); // 'building'
