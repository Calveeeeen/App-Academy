/* Write a function doubleLetterCount that takes in a string and returns the number of times
that the same letter repeats twice in a row. */

function doubleLetterCount(string) {
    // your code here
    let i=0;
    let count=0;
    while (i<string.length){
        let char = string[i];
        let before = string[i-1];
        if (char==before){
            count++;
        }
        i++;
    }
    return count;
}

console.log(doubleLetterCount("the jeep rolled down the hill"));  // 3
console.log(doubleLetterCount("bootcamp")); // 1
