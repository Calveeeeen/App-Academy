/* Write a function pairsMaker(arr) that takes in a an array as an argument.
The function should return a 2D array where the subarrays represent unique
pairs of element from the input array. */

// your code here
function pairsMaker(arr){
    let newArr=[];
    for(let i=0; i<arr.length; i++){
        let value1 = arr[i];
        for(let t=i+1; t<arr.length; t++){
            let value2 = arr[t];
            let pairs = [value1, value2]
            newArr.push(pairs)
        }
    }
    return newArr;
}



console.log(pairsMaker(['a', 'b', 'c', 'd'])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(['Rosemary', 'Alex', 'Connor'])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]
