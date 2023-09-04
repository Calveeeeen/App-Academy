/* Write a function hipsterfy(sentence) that takes in a sentence string and
returns the sentence where every word is missing its last vowel. */

// your code here
function hipsterfy(sentence){
    let words = sentence.split(" ");
    let vowels = 'aeiou';
    let newSent = [];
    let newWord ="";
    for(let i=0; i<words.length; i++){
        let word = words[i];

        for(let t=word.length-1; t>=0; t--){
            let char = word[t];
            if(vowels.includes(char)){
                newWord = word.slice(0,t) +word.slice(t+1);
            }
        }
        newSent.push(newWord);
    }
    return newSent.join(" ");
}


console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'
