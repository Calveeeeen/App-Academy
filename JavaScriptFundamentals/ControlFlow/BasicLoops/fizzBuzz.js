// Define a function fizzBuzz(max) that takes a number and prints every number from 0 to max (
// not inclusive) that is divisible by either 3 or 5, but not both.

function fizzBuzz(max){
    let i = 0;
    while (i<max){
        if (i%3===0 && i%5!==0){
            console.log(i);
        }
        else if( i%5===0 && i%3!==0){
            console.log(i);
        }
        i++;
    }
}

return fizzBuzz(20);
