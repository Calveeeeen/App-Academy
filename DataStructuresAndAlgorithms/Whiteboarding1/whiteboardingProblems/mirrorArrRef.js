function mirrorArray(arr){
    let arrRev = [];
    for(let i = arr.length-1; i >= 0; i--){
        let el = arr[i];
        arrRev.push(el);
    }
    return arr.concat(arrRev);
}

// mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
// mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]

console.log(mirrorArray([1,2,3]));
console.log(mirrorArray(['a', 'b', 'c', 'd']));
