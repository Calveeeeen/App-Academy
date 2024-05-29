function pairsToString(arr) {
    let str = [];
    for(let i=0; i<arr.length; i++){
        let letter = arr[i][0];
        let times = arr[i][1];
        for(let x=0; x<times; x++){
            str.push(letter);
        }
    }
    return str.join("");
}

const array1 = [
    ['a', 3],
    ['b', 1],
    ['c', 2]
];
// pairsToString(array1);  // => 'aaabcc'

const array2 = [
    ['f', 1],
    ['o', 2],
    ['d', 1],
    ['!', 1]
];
// pairsToString(array2);  // => 'food!'

console.log(pairsToString(array1));
console.log(pairsToString(array2));
