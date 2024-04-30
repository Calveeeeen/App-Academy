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

console.log(isPrime(2));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(9));
console.log(isPrime(2017));
