/* Write a function minValue(nums) that takes in an array of numbers as an arg. The function should return the smallest number of
the array. If the array is empty, the function should return null. */

// your code here
function minValue(nums){
    let smallest = nums[0];
    if (Array.isArray(nums)){
        if(nums.length === 0 ){
            return null;
        }
        for (let i = 0; i<nums.length; i++){
            if(nums[i]<smallest){
                smallest = nums[i];
            }
        }
        return smallest;
    }
}



console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null
