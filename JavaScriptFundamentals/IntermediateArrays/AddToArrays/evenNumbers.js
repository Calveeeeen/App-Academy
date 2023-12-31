/* Write a function evenNumbers(max) that takes in a number as an arg. The function should
return an array containing all positive, even numbers that are less than max.

Define this function using function expression syntax. */

// your code here
function evenNumbers(max){
    let arr=[];
    for(let num=2; num<max; num++){
        if(num%2==0){
            arr.push(num)
        }
    }
    return arr;
}


console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]
