
function bubbleSort(arr) {
  let swaps = false;;
  // Iterate through the array
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    let next = arr[i + 1];

    // If the current value is greater than its neighbor to the right
    if (val > next) {
      let temp = next;
      // Swap those values
      arr[i + 1] = val;
      arr[i] = temp;
      swaps = true;
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  if (swaps == false) {
    return;
  }
  // // Otherwise, repeat from the beginning
  else{
    bubbleSort(arr);
  }
}

module.exports = bubbleSort;
