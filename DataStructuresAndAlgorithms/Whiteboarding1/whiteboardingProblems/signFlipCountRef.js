function signFlipCount(nums){
    let count =0;

    for(let i=0; i<nums.length; i++){
        let num = nums[i];
        let next = nums[i+1];

        if(num > 0 && next < 0){
            count++
        }
        else if(num<0 && next > 0){
            count++
        }
    }
    return count;
}

signFlipCount([5, 6, 10, 3]); // => 0
signFlipCount([-12, 0, -3, -5]); // => 0
signFlipCount([-12, 10, -3, -5]); // => 2
signFlipCount([1, -2, -3, -4]); // => 1
signFlipCount([-1, 11.3, -3, 100]); // => 3

console.log(signFlipCount([5, 6, 10, 3]));
console.log(signFlipCount([-12, 0, -3, -5]));
console.log(signFlipCount([-12, 10, -3, -5]));
console.log(signFlipCount([1, -2, -3, -4]));
console.log(signFlipCount([-1, 11.3, -3, 100]));
