function splitHalfArray(arr) {
    let firstHalf = [];
    let secondHalf = [];
    let half = Math.floor(arr.length / 2);

    if (arr.length % 2 !== 0) {
        for (let i = 0; i < half; i++) {
            let value = arr[i];
            firstHalf.push(value);
        }
        for (let x = half + 1; x < arr.length; x++) {
            let el = arr[x];
            secondHalf.push(el);
        }
    }
    else{
        for (let i = 0; i < half; i++) {
            let value = arr[i];
            firstHalf.push(value);
        }
        for (let x = half; x < arr.length; x++) {
            let el = arr[x];
            secondHalf.push(el);
        }
    }
    // console.log(firstHalf);
    // console.log(secondHalf);
    return [firstHalf, secondHalf];
}

// splitHalfArray([1, 2, 3, 4, 5]);
// => [ [ 1, 2 ], [ 4, 5 ] ]

// splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']);
// => [ [ 'a', 'b', 'c' ], [ 'd', 'e', 'f' ] ]

console.log(splitHalfArray([1, 2, 3, 4, 5]));
console.log(splitHalfArray(['a', 'b', 'c', 'd', 'e', 'f']));
