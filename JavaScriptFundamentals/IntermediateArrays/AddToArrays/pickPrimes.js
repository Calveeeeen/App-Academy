/* Write a function pickPrimes that takes in an array of numbers and returns a
new array containing only the prime numbers. */

function pickPrimes(array) {
    // your code here
    let newArr = [];
    for(let t=0; t<array.length; t++){
        let num = array[t];
        if(isPrime(num)){
            newArr.push(num)
        }
    }
    return newArr;
}

function isPrime(num){
    if (num < 2){
        return false;
    }
    else if(num == 2){
        return true;
    }
    else if(num > 2){
        for (let i=2; i< num; i++){
            if(num%i==0){
                return false;
            }
        }
        return true;
    }
}



console.log(pickPrimes([2, 3, 4, 5, 6]));  // [2, 3, 5]
console.log(pickPrimes([101, 20, 103, 2017]));  // [101, 103, 2017]
