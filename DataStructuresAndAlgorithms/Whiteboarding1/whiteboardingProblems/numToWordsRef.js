function numsToWords(numString){
    strObj = {1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9:"Nine", 0: "Zero"}
    let digitString = [];
    let digits = numString.split("");
    // console.log(digits);
    for(let i=0; i<digits.length; i++){
        let digit = digits[i];
        let key = digit
        if(key in strObj){
            digitString.push(strObj[key])
        }
    }
    // console.log(digitString);
    return digitString.join("");
}

// numsToWords('42') // => 'FourTwo'
// numsToWords('123') // => 'OneTwoThree'
// numsToWords('159598') // => 'OneFiveNineFiveNineEight'

console.log(numsToWords('42'));
console.log(numsToWords('123'));
console.log(numsToWords('159598'));
