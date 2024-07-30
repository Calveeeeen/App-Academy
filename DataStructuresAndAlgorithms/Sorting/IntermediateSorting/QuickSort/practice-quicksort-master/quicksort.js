function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if(arr.length <= 1){
    return arr;
  }
  // Pick the first value as the pivot
  let val = arr[0];
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right
  let left = [];
  let right =[];
  for(let i=1; i<arr.length; i++){
    let num = arr[i];
    if(num < val){
      left.push(num);
    }
    else{
      right.push(num);
    }
  }

  // Recursively sort the left
  // Recursively sort the right
  left = quicksort(left);
  right = quicksort(right);
  // Return the left, pivot and right in sorted order
  console.log(left);
  console.log(right);
  left.push(val);

  return left.concat(right);

}


module.exports = [quicksort];
