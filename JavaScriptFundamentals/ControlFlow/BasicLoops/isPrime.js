// Define a function isPrime(number) that returns true if number is prime. Otherwise, false.
// A number is prime if it is only divisible by 1 and itself.

// write your code here...
function isPrime(num){
    let arr=[];
    let i=1;
    while(i<=num){
        if (num%i===0){
            arr.push(i);
        }
        i++
    }
     if(arr.length>2){
            return false;
        }
        else{
            return true;
        }
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true
