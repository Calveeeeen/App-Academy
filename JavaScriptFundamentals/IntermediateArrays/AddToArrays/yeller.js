/* Write a function yeller(words) that takes in an array of words. The function
should return a new array where each element of the original array is yelled. */

// your code here
function yeller(words){
    let yells = [];
    for(let i=0; i<words.length; i++){
        let word = words[i];
        let yelled = word.toUpperCase();
        yells.push(yelled+"!");
    }
    return yells
}


console.log(yeller(['hello', 'world'])); // [ 'HELLO!', 'WORLD!' ]
console.log(yeller(['kiwi', 'orange', 'mango'])); // [ 'KIWI!', 'ORANGE!', 'MANGO!' ]
