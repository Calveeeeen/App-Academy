function rotateRight(array, num){
    let newArr = [];
    let oldArr = array;
    let firstHalf = oldArr.slice(0, oldArr.length-num);
    let pop = oldArr.slice(oldArr.length-num, oldArr.length);
    newArr = pop.concat(firstHalf)

    return newArr;
}

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

// this code needs to be fixed...
// ***FIXED
