// The fibonacci sequence is a sequence of numbers whose first and second elements are 1.
// To generate further elements of the sequence we take the sum of the previous two elements.
// For example the first 6 fibonacci numbers are 1, 1, 2, 3, 5, 8. Write a function fibonacci
// that takes in a number length and returns the fibonacci sequence up to the given length.

function fibonacci(length) {
    // your code here
    if (length===0){
        return [];
    }
    else if(length ===1){
        return [1];
    }

    let arr=[1,1];
    while (arr.length<length){
        let num= arr.length;
        let firstNum = arr[num-1];
        let secondNum = arr[num-2];
        let newNum = firstNum + secondNum;
        arr.push(newNum);
    }
    return arr;
}

console.log(fibonacci(0)); // []
console.log(fibonacci(1)); // [1]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8]
console.log(fibonacci(8)); // [1, 1, 2, 3, 5, 8, 13, 21]
