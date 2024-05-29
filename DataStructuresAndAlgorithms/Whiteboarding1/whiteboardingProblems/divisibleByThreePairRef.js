function divisibleByThreePairSum(array){
    let arr = [];
    for(let i=0; i<array.length; i++){
        for(let k=i+1; k<array.length; k++){
            let el1 = array[i];
            let el2 = array[k];
            let sum = el1 + el2;
            if(sum % 3 == 0){
                arr.push([i, k]);
            }
        }
    }
    return arr;
}

// const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
// arr1 // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

// const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
// arr2 // => [[1, 3]]

console.log(divisibleByThreePairSum([1, 6, 3, 4, 2, 0]));
console.log(divisibleByThreePairSum([8, 3, 5, 9, 2]));
