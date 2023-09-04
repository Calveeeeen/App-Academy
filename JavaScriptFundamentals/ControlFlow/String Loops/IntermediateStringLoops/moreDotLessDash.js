/* Write a function moreDotLessDash that accepts a string as an argument. The function
should return a boolean indicating whether or not the string contains more dots (.) than
dashes (-). */

// Your code here
function moreDotLessDash(string){
    let i=0;
    let dotCount =0;
    let dashCount=0;
    while(i<string.length){
        let dash='-';
        let dot='.';
        let char=string[i]
        // count dashes
        if(dot.includes(char)){
            dotCount+=1;
        }
        if (dash.includes(char)){
            dashCount+=1;
        }
        i++;
    }
    if(dotCount>dashCount){
        return true;
    }
    else if(dotCount==dashCount){
        return false;
    }
    else{
        return false;
    }
}


console.log(moreDotLessDash('2-D arrays are fun. I think.'));           // true
console.log(moreDotLessDash('Morse code is great.'));                   // true
console.log(moreDotLessDash('.... . -.--'));                            // true
console.log(moreDotLessDash('.--. .-. --- --. .-. .- -- -- . .-.'));    // false
console.log(moreDotLessDash('high-flying acrobat.'));                   // false
