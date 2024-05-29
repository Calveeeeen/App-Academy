function variableNameify(words){
    words[0]= words[0].toLowerCase();
    for(let i =1; i<words.length; i++){
        let word = words[i];
        let firstLetter = word.slice(0,1);
        let rest = word.slice(1, word.length);

        word = firstLetter.toUpperCase().concat(rest.toLowerCase());
        words[i] = word;
    }

    return words.join("");
}

// variableNameify(['is', 'prime']) // => 'isPrime'
// variableNameify(['remove', 'last', 'vowel']) // => 'removeLastVowel'
// variableNameify(['MaX', 'VALUE']) // => 'maxValue'

console.log(variableNameify(['is', 'prime']));
console.log(variableNameify(['remove', 'last', 'vowel']));
console.log(variableNameify(['MaX', 'VALUE']));
