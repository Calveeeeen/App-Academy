function firstNPrimes(n){
    let arr = [];
    if(n < 1){
        arr = []
    }
    else if(n>=1){
        arr = [2];
        let i = 1;
        let num = 3;
        while(i < n){
            if(isPrime(num)){
                arr.push(num);
                i++;
                num++;
            }
            else{
                num++;
            }
        }
    }
    return arr;
}

// problem with importing function
function isPrime(num){
    let arr = [];
    for(let i = 1; i <= num; i++){
        if(num%i==0){
            arr.push(i);
        }
    }
    if(arr.length>2){
        return false;
    }
    else{
        return true;
    }
}
// firstNPrimes(0);  // => []
// firstNPrimes(1);  // => [2]
// firstNPrimes(4);  // => [2, 3, 5, 7]

console.log(firstNPrimes(0));
console.log(firstNPrimes(1));
console.log(firstNPrimes(4));
