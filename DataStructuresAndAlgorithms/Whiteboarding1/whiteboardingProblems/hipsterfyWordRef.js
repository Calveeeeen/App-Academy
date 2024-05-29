function hipsterfyWord(word){
    let vowels = 'aeiouAEIOU';
    let letters = word.split('');

    for(let i=letters.length; i>=0; i--){
        let letter = letters[i];
        if(vowels.includes(letter)){
            letters.splice(i, 1);
            return letters.join('');
        }
    }
}

// hipsterfyWord('proper') // => 'propr'
// hipsterfyWord('tonic') // => 'tonc'
// hipsterfyWord('PANTHER') // => 'PANTHR'
// hipsterfyWord('BACKWARDS') // => 'BACKWRDS'

console.log(hipsterfyWord('proper'));
console.log(hipsterfyWord('tonic'));
console.log(hipsterfyWord('PANTHER'));
console.log(hipsterfyWord('BACKWARDS'));
