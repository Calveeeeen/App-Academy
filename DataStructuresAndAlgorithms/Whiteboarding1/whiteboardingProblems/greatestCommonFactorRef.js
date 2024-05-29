function greatestCommonFactor(num1, num2){
    let factorArr = [];
    let range = Math.min(num1, num2);

    for(let i=0; i<range; i++){
        if(num1%i==0 && num2%i==0){
            factorArr.push(i);
        }
    }
    let gcf = factorArr.length;
    // console.log(gcf);
    return factorArr[Number(gcf-1)];
}

// greatestCommonFactor(15, 25) // => 5
// greatestCommonFactor(16, 24) // => 8
// greatestCommonFactor(7, 11) // => 1

console.log(greatestCommonFactor(15, 25));
console.log(greatestCommonFactor(16, 24));
console.log(greatestCommonFactor(7, 11));
