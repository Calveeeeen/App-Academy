/* Write a function choosePrimes(nums) that takes in an array of numbers as args. The
function should return a new array containing the primes from the original array. A
prime number is a number that is only divisible by 1 and itself. Hint: consider creating
a helper function to check if a number is prime! */

function isPrime(number){
    for (i=2;i<number;i++){
        if(number<2){
            return false
        }
        else if(number%i==0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
