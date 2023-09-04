/* Write a function reverb that accepts a word as an argument. The function should return a new word where all letters that come
after the last vowel (including the vowel itself) are repeated at the end of the word. If the value passed in is not a string,
say someone passes in a number as an argument, then return null. */

// Your code here
function reverb(word){
    let vowel = 'aeiou'
    if (typeof(word) == 'string'){
        let lowercase = word.toLowerCase();
        for (let i=word.length; i>0; i--){
            let char = lowercase[i];
            if(vowel.includes(char)){
                let secondhalf = word.slice(i, word.length);
                return word + secondhalf;
            }
        }
    }
    else{
        return null;
    }
}


console.log(reverb('running')); // runninging
console.log(reverb('FAMILY'));  // FAMILYILY
console.log(reverb('trash'));   // trashash
console.log(reverb('DISH'));    // DISHISH
console.log(reverb(197393));    // null
