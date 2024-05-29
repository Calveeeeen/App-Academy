function hasSymmetry(arr){
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
    secondHalf = secondHalf.reverse();
    for(let d=0; d<=half; d++){
        let el1 = firstHalf[d];
        let el2 = secondHalf[d];
        if(el1 != el2){
            return false;
        }
    }
    return true;
}

// hasSymmetry([1, 2, 3, 3, 2, 1]) // => true
// hasSymmetry([1, 2, 3, 3, 4, 1]) // => false
// hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']) // => true
// hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']) // => false

console.log(hasSymmetry([1, 2, 3, 3, 2, 1]));
console.log(hasSymmetry([1, 2, 3, 3, 4, 1]));
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat']));
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat']));
