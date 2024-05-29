function countAdjacentSums(arr, n){
    let count =0;

    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let next = arr[i+1];
        let sum = num + next;
        if(sum === n){
            count++;
        }
    }
    return count;
}

// countAdjacentSums([1, 5, 1], 6) // => 2
// countAdjacentSums([7, 2, 4, 6], 7) // => 0
// countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13) // => 3

console.log(countAdjacentSums([1, 5, 1], 6));
console.log(countAdjacentSums([7, 2, 4, 6], 7));
console.log(countAdjacentSums([6, 7, 11, 2, 5, 10, 3], 13));
