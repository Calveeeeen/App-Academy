function reverb(word){
    let vowels = 'aeiou';
    let letters = word.split('');
    for(let i=letters.length; i>=0; i--){
        let letter = letters[i];
        if(vowels.includes(letter)){
            let repeat = letters.splice(i, letters.length).join("");

            return letters.join("").concat(repeat+repeat)
        }
    }
    return word;
}

// reverb('running');  // => 'runninging'
// reverb('wild');  // => 'wildild'
// reverb('debugged');  // => 'debuggeded'
// reverb('my');  // => 'my'

console.log(reverb('running'));
console.log(reverb('wild'));
console.log(reverb('debugged'));
console.log(reverb('my'));
