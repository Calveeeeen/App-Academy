function vowelShift(sent){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'a', 'e', 'i', 'o', 'u'];

    let letters = sent.split("");

    for(let i=0; i<letters.length; i++){
        let letter = letters[i];
        if(vowels.includes(letter)){
            let x = vowels.indexOf(letter)
            letters[i] = vowels[x+1];
        }
    }

    return letters.join("");
}

// vowelShift('bootcamp');  // => 'buutcemp'
// vowelShift('hello world');  // => 'hillu wurld'
// vowelShift('on the hunt');  // => 'un thi hant'

console.log(vowelShift('bootcamp'));
console.log(vowelShift('hello world'));
console.log(vowelShift('on the hunt'));
