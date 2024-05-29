function abbreviate(sentence){
    let vowels =['a','e','i','o','u'];
    let words = sentence.split(" ");
    let shortenedString = words.map(word => {
        if (word.length > 3 && vowels.some(vowel => word.includes(vowel))){
            return word.split("").filter(char => !vowels.includes(char)).join("");
        }
        else{
            return word;
        }
    });
    let shortenedSent = shortenedString.join(" ");
    return shortenedSent;
}

abbreviate('the bootcamp is fun'); // => 'the btcmp is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'


console.log(abbreviate('the bootcamp is fun'));
console.log(abbreviate('programming is fantastic'));
console.log(abbreviate('hello world'));
console.log(abbreviate('how are you'));
