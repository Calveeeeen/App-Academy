function threeUniqueVowels(str){
    let uniqueVowels = {};
    let vowels = 'aeiou';
    let count = 0;
    let letters = str.split("");

    for(let i=0; i<letters.length; i++){
        let letter = letters[i];
        if(vowels.includes(letter)){
            key = letter;
            uniqueVowels[key] = 1;
        }
    }
    for(key in uniqueVowels){
        count++;
    }
    if(count > 2){
        return true;
    }
    return false;
}

// threeUniqueVowels('delicious');  // => true
// threeUniqueVowels('the bootcamp');  // => true
// threeUniqueVowels('bootcamp');  // => false
// threeUniqueVowels('dog');  // => false
// threeUniqueVowels('go home');  // => false

console.log(threeUniqueVowels('delicious'));
console.log(threeUniqueVowels('the bootcamp'));
console.log(threeUniqueVowels('bootcamp'));
console.log(threeUniqueVowels('dog'));
console.log(threeUniqueVowels('go home'));
