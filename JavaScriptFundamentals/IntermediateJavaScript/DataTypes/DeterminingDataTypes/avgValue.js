/*m Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in
the array. If the array is empty, it should return null. */

// your code here
function avgVal(arr){
    let divisor = arr.length;
    let total = 0;

    if(arr.length>1){
        for (let i=0; i<arr.length;i++){
            let num = arr[i];
            total += num;
        }
        let avg = total/divisor;
        return avg
    }
    else{
        return null;
    }
}


console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null
