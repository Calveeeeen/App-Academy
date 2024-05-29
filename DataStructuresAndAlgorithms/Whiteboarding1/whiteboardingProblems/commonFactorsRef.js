function commonFactors(num1, num2){
    let max = Math.min(num1, num2);
    let factor = [];
    for(let i=1; i<=max; i++){
        if(num1 %i==0 && num2%i==0){
            factor.push(i);
        }
    }
    return factor;
}

// commonFactors(12, 50);  // => [ 1, 2 ]
// commonFactors(6, 24);  // => [ 1, 2, 3, 6 ]
// commonFactors(11, 22);  // => [ 1, 11 ]
// commonFactors(45, 60);  // => [ 1, 3, 5, 15 ]

console.log(commonFactors(12, 50));
console.log(commonFactors(6, 24));
console.log(commonFactors(11, 22));
console.log(commonFactors(45, 60));
