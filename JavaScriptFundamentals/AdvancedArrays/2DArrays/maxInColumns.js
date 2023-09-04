/* Write a function maxColumn(matrix) that takes in a 2-dimensional
array (matrix) and returns an array containing the maximum value in
each column. The array length should be equal to the number of columns,
such that returnArray[i] is equal to the max value in the ith column. */

function maxColumn(matrix) {
    // your code here...
    let newArr =[];
    let largest = 0;
    for (let i = 0; i <matrix.length; i++){
        for(let t=0; t<matrix.length;t++){
            let value = matrix[t][i]
            if(value > largest){
                largest = value;
            }
        }
        newArr.push(largest);
    }
    return newArr;

}


matrix = [[ 5,  9, 21],
        [ 9, 19,  6],
        [12, 14, 15]]

console.log(maxColumn(matrix)); // [12, 19, 21]
