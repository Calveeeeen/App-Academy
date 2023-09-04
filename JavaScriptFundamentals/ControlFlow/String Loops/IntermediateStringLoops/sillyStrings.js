/* Write a function sillyString that accepts a word as an argument. The functions should return
a new word where every vowel of the original word is followed by 'b' and that same vowel. For
example, 'siren' would turn into 'sibireben'. */

// Your code here
function sillyString(word){
    let vowels='aeiou';
    let newWord='';
    let i=0;
    while(i<word.length){
        let char = word[i];
        if(vowels.includes(char)){
            newWord+=char + 'b' + char;
        }
        else{
            newWord+=char;
        }
        i++
    }
    return newWord;
}

console.log(sillyString('stop'));       // stobop
console.log(sillyString('that'));       // thabat
console.log(sillyString('can'));        // caban
console.log(sillyString('cats'));       // cabats
console.log(sillyString('italy'));      // ibitabaly
console.log(sillyString('scooter'));    // scobooboteber
