function threeInARow(array){
    for(let i=0; i<array.length; i++){
        let first = array[i];
        let second = array[i+1];
        let third = array[i+2];
        if(first == second && second == third){
            return true;
        }
    }
    return false;
}

// threeInARow([4, 3, 7, 7, 7, 13, 8]);  // => true;
// threeInARow([10, 9, 20, 33, 3, 3]);  // => false;

console.log(threeInARow([4, 3, 7, 7, 7, 13, 8]));
console.log(threeInARow([10, 9, 20, 33, 3, 3]));
