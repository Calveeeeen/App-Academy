/* Write a function choosePrimes(nums) that takes in an array of numbers as
args. The function should return a new array containing the primes from the
original array. A prime number is a number that is only divisible by 1 and
itself. Hint: consider creating a helper function to check if a number is
prime! */

// your code here
function choosePrimes(nums){
    let arr = [];
    for(let i = 0; i<nums.length; i++){
        let number = nums[i];
        if(isPrime(number)){
            arr.push(number)
        }
    }
    return arr;
}

function isPrime(number){
    if(number < 1){
        return false;
    }
    if(number == 2){
        return true;
    }
    for(let i=2; i<number; i++){
        if(number % i==0){
            return false;
        }
    }
    return true;
}


console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
