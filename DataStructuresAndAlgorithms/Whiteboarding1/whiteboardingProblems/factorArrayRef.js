function factorArray(array, number){
    let isFactor = [];
    for(let i=0; i<array.length; i++){
        let el = array[i];
        if(number % el == 0){
            isFactor.push(el);
        }
    }
    return isFactor;
}

// factorArray([2,3,4,5,6],20) // => [2,4,5]
// factorArray([2,3,4,5,6],35) // => [5]
// factorArray([10,15,20,25],5) // => []

console.log(factorArray([2,3,4,5,6],20));
console.log(factorArray([2,3,4,5,6],35));
console.log(factorArray([10,15,20,25],5));
