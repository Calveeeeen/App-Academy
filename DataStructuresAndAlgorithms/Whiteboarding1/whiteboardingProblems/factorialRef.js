let obj = {};

function factorial(n){
    if(n in obj){
        return obj[n];
    }
    if(n === 1){
        return 1;
    }

    obj[n] = n*factorial(n-1);
    return obj[n];

}

// factorial(1);  // => 1
// factorial(4);  // => 24
// factorial(5);  // => 120
// factorial(10);  // => 3628800

console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
