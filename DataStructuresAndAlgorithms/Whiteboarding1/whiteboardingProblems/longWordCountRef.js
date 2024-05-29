function longWordCount(string){
    let wordsArr = string.split(" ");
    let count = 0;

    for(let i=0 ;i<wordsArr.length; i++){
        let word = wordsArr[i];
        let lettersArr = word.split('');
        if(lettersArr.length >7){
            count++;
        }
    }

    return count;
}

// longWordCount("");  // => 0
// longWordCount("short words only");  // => 0
// longWordCount("one reallylong word");  // => 1
// longWordCount("two reallylong words inthisstring");  // => 2
// longWordCount("allwordword longwordword wordswordword");  // => 3
// longWordCount("seventy schfifty five");  // => 1

console.log(longWordCount(""));
console.log(longWordCount("short words only"));
console.log(longWordCount("one reallylong word"));
console.log(longWordCount("two reallylong words inthisstring"));
console.log(longWordCount("allwordword longwordword wordswordword"));
console.log(longWordCount("seventy schfifty five"));
