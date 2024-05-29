function twoDimensionalSize(arr) {
    let count =0;
    for(let i=0; i<arr.length; i++){
        let inner = arr[i];
        for(let t=0; t<inner.length; t++){
            count++;
        }
    }
    return count;
}

const arr1 = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9]
];
// twoDimensionalSize(arr1);  // => 9

const arr2 = [
    ['a'],
    ['b', 'c', 'd', 'e']
];
// twoDimensionalSize(arr2);  // => 5

console.log(twoDimensionalSize(arr1));
console.log(twoDimensionalSize(arr2));
