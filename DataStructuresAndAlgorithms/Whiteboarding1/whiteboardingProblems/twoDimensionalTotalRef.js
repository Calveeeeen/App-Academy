function twoDimensionalTotal(array){
    let sum = 0;

    for(let i=0; i<array.length; i++){
        let inner = array[i];
        for(let t=0; t<inner.length; t++){
            let el = inner[t];
            sum+=el;
        }
    }

    return sum;
}

const arr1 = [
    [5, 2, 5, 3],
    [12, 13],
];

// twoDimensionalTotal(arr1);  // => 40

const arr2 = [
    [2],
    [1, 9],
    [1, 1, 1]
]

// twoDimensionalTotal(arr2);  // => 15

console.log(twoDimensionalTotal(arr1));
console.log(twoDimensionalTotal(arr2));
