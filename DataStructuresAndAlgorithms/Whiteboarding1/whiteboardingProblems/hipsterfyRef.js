function hipsterfy(sent){
    let vowels = 'aeiou';
    let wordsArr = sent.split(" ");
    let newWordsArr = [];
    wordsArr.forEach(word => {
        let letters = word.split("");
        for(let i=letters.length; i>=0; i--){
            let letter = letters[i];
            if(vowels.includes(letter)){
                letters.splice(i,1);
                return newWordsArr.push(letters.join(""));
            }
        }
    });
    return newWordsArr;
}

// hipsterfy("proper");  // => "propr"
// hipsterfy("proper tonic panther");  // => "propr tonc panthr"
// hipsterfy("towel flicker banana");  // => "towl flickr banan"
// hipsterfy("runner anaconda");  // => "runnr anacond"
// hipsterfy("turtle cheeseburger fries");  // => "turtl cheeseburgr fris"

console.log(hipsterfy("proper"));
console.log(hipsterfy("proper tonic panther"));
console.log(hipsterfy("towel flicker banana"));
console.log(hipsterfy("runner anaconda"));
console.log(hipsterfy("turtle cheeseburger fries"));
