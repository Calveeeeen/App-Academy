function threeIncreasing(arr){
    for(let i=0; i<arr.length; i++){
        let num = arr[i];
        let num2= arr[i+1];
        let num3 = arr[i+2];
        if(num2 == num+1 && num3 == num2+1){
            return true;
        }
    }
    return false;
}

// threeIncreasing([3, 2, 11, 12, 13, 2, 4]);  // => true
// threeIncreasing([7, 2, 4, 5, 2, 1, 6]);  // => false

console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));
console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));
