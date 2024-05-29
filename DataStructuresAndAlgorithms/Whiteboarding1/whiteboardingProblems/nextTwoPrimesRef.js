function nextTwoPrimes(num){
    let arr = [];

    for(let i=num+1; i<(num+1)*(num+1); i++){
        if(arr.length < 2){
            if(isPrime(i)===true){
                arr.push(i);
            }
        }
        else if(arr.length == 2){
            return arr;
        }
    }
    return arr;
}

function isPrime(num){
    if(num<1){
        return false;
    }
    if(num<=3){
        return true;
    }
    if(num%2 === 0 || num%3===0){
        return false;
    }

    for(let i=5 ; i*i <= num; i+=6){
        if(num%i===0 || num%(i+2)===0){
            return false;
        }
    }

    return true;
}

// nextTwoPrimes(2);  // => [ 3, 5 ]
// nextTwoPrimes(3);  // => [ 5, 7 ]
// nextTwoPrimes(7);  // => [ 11, 13 ]
// nextTwoPrimes(8);  // => [ 11, 13 ]
// nextTwoPrimes(20);  // => [ 23, 29 ]
// nextTwoPrimes(97);  // => [ 101, 103 ]

console.log(nextTwoPrimes(2));
console.log(nextTwoPrimes(3));
console.log(nextTwoPrimes(7));
console.log(nextTwoPrimes(8));
console.log(nextTwoPrimes(20));
console.log(nextTwoPrimes(97));
