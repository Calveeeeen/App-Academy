function oddWordsOut(sent){
    let newSent = [];
    let words = sent.split(" ");

    for(let i=0; i<words.length; i++){
        let word = words[i];
        // console.log(word);
        if(word.length%2 == 0){
            newSent.push(word);
            newSent.push(" ");
        }
    }
    return newSent.join("");
}

// oddWordsOut('go to the store and buy milk');  // => 'go to milk'
// oddWordsOut('what is the answer');  // => 'what is answer'

console.log(oddWordsOut('go to the store and buy milk'));
console.log(oddWordsOut('what is the answer'));
