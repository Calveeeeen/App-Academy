/* Write a function maxInMatrix(matrix) that takes in a 2-dimensional
array (matrix) and returns the largest value in the matrix. The matrix
contains at least one value. */

function maxInMatrix(matrix) {
    // your code here...
    let largest = 0;
    for (let i=0; i<matrix.length; i++){
        let subArr = matrix[i];
        for (let t=0; t<subArr.length; t++){
            let value = subArr[t];
            if (value > largest){
                largest = value;
            }
        }
    }
    return largest;
}


matrix = [
    [11,  2,-99],
    [20, 19, 10],
    [47, 72, 56]
]

console.log(maxInMatrix(matrix)); // 72
