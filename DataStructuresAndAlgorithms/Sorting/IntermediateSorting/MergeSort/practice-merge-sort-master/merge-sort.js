// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
  if(arr.length <= 1){
    return arr;
  }
  // Divide the array in half
  let half = Math.floor(arr.length/2);
  let left = arr.slice(0, half);
  let right = arr.slice(half);
  // Recursively sort the left half
  left = mergeSort(left);
  // Recursively sort the right half
  right = mergeSort(right);
  // Merge the halves together and return
  return merge(left, right);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let arr = [];
  // Point to the first value of each array
  let index1 = 0;
  let index2 = 0;
  // While there are still values in each array...
  while(index1 < arrA.length && index2 < arrB.length){
    // Compare the first values of each array
    let val1 = arrA[index1];
    let val2 = arrB[index2];

    if(val1<val2){
      arr.push(val1);
      index1++;
    }
    else {
      arr.push(val2);
      index2++;
    }
  }
  while(index1 <arrA.length){
    arr.push(arrA[index1]);
    index1++;
  }
  while(index2<arrB.length){
    arr.push(arrB[index2]);
    index2++;
  }
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array
  // Return the return array
  return arr;
}

module.exports = [merge, mergeSort];
