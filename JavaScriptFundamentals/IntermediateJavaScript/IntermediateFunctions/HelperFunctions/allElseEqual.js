/* Write a function allElseEqual that takes in an array of numbers. The function should
return the element of the array that is equal to half of the sum of all elements of the array.
If there is no such element, the method should return null. */

function allElseEqual(arr) {
    // your code here
   let number = sumArr(arr)/2
   for (let t=0; t<arr.length;t++){
       let charAt=arr[t];
       if(number == charAt){
           return number
       }
    }
   return null;
}

function sumArr(array){
    let sum=0;
    for (let i = 0; i<array.length;i++){
        let num = array[i];
        sum+=num;
    }
    return sum;
}

console.log(allElseEqual([2, 4, 3, 10, 1])); // 10
console.log(allElseEqual([6, 3, 5, -9, 1])); // 3
console.log(allElseEqual([1, 2, 3, 4]));     // null
