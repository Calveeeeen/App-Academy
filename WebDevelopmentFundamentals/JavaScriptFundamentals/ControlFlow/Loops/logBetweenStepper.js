/* Write a function logBetweenStepper(min, max, step) that takes in
3 numbers as parameters. The function should print out numbers between
min and max at step intervals. See the following examples.

Hint: this function only needs to print using console.log it does not
need to return. */

function logBetweenStepper(min, max, step){
    for (let index=min; index<= max; index+=step){
        console.log(index);
    }
}

logBetweenStepper(-10,15,5);
