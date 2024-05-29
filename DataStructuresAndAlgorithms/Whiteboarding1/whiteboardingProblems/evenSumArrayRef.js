function evenSumArray(array){
    newArr = [];
    for(let i=0; i<array.length; i++){
        let el = array[i];
        let sum = 0;
        for(let t=0; t<=el; t++){
            if(t%2==0){
                sum+=t;
            }
            newArr[i] = sum;
        }
    }
    return newArr;
}

// evenSumArray([6, 7, 5]) // => [ 12, 12, 6 ]
// evenSumArray([2, 8, 3, 5]) // => [ 2, 20, 2, 6 ]

console.log(evenSumArray([6, 7, 5]));
console.log(evenSumArray([2, 8, 3, 5]));
