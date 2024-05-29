function commonPrimeFactors(num1, num2){
    let factors = [];
    let max = Math.min(num1, num2);

    for(let i=2; i<=max; i++){
        if(num1%i==0 && num2 %i==0){
            factors.push(i);
        }
    }
    for(let x=0; x<factors.length; x++){
        let factor = factors[x];
        for(let t=2; t<factor; t++){
            if(factor%t==0){
                factors.splice(x, 1);
            }
        }
    }
    return factors;
}

// commonPrimeFactors(12, 50);  // => [ 2 ]
// commonPrimeFactors(6, 24);  // => [ 2, 3 ]
// commonPrimeFactors(11,22);  // => [ 11 ]
// commonPrimeFactors(45, 60);  // => [ 3, 5 ]

console.log(commonPrimeFactors(12, 50));
console.log(commonPrimeFactors(6, 24));
console.log(commonPrimeFactors(11,22));
console.log(commonPrimeFactors(45, 60));
