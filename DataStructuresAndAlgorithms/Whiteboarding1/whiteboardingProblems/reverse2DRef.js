function reverse2D(arr) {
    let reversed = [];
    console.log(arr.length);
    for(let i=0; i<arr.length; i++){
        let inner = arr[i];
        inner.forEach(el =>{
            reversed.push(el);
        })
    }
    return reversed.reverse().join("");
}

const arr1 = [
    ['a', 'b', 'c', 'd'],
    ['e', 'f'],
    ['g', 'h', 'i']
];

// reverse2D(arr1) // => 'ihgfedcba'
const arr2 = [
    ['Julian', 'Matt', 'Mike'],
    ['Oscar', 'Patrick']
];
// reverse2D(arr2) // => 'PatrickOscarMikeMattJulian'

console.log(reverse2D(arr1));
console.log(reverse2D(arr2));
