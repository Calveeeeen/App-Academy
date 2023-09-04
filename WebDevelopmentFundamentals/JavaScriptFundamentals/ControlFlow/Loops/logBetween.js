/* Define a function logBetween(lowNum, highNum) that will print every
number from lowNum to highNum, inclusive. Inclusive means that the
range includes lowNum and highNum.

Hint: this function only needs to print using console.log it does not
need to return. */

function logBetween(lowNum, highNum){
    // for loop approach
    for (let index=lowNum; index<=highNum; index+=1){
        console.log(index);
    }
    // while loop approach
    let i = lowNum;
    while (i<=highNum){
        console.log(i);
        i++;
    }
}


logBetween(1,5);
