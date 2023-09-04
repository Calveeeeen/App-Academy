/* Write a function printFives(max) that prints out the multiples of
5 that are less than the max.

Try to solve this in two ways, one using an if statement, and one
without. */

function printFives(max){
    // for loop approach
    for (let index=0; index*5<max; index+=1){
        product = index * 5;
        console.log(product);
    }

    // if statement approach
    // still needs a counter so a while/for loop is needed with if statements
}

printFives(20)
