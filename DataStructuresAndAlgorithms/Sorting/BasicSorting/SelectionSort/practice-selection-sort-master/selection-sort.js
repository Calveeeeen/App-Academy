

function selectionSort(arr) {

	// Copy the original array
	let unsorted = [...arr];
	// Create an array to store the sorted values
	let sorted = [];
	// While the array is not empty...
	while (unsorted.length > 0) {
		// Do not move this console.log
		console.log(sorted.join(","));

		// Find the index of the minimum value in the unsorted half
		let smallest = unsorted[0];
		for (let i = 0; i < unsorted.length; i++) {
			let el = unsorted[i];
			if (el < smallest) {
				smallest = el;
			}
		}

		// Save and remove the value at the min index
		let ind = unsorted.indexOf(smallest);
		let removedArr = unsorted.splice(ind, 1);
		// Add the min value to the end of the sorted array
		sorted.push(removedArr[0]);
	}
	return sorted;
}



function selectionSortInPlace(arr) {
	// Set a pointer at zero diving the array into sorted and unsorted halves
	let divider = 0;
	// Repeat while the unsorted half is not empty:
	while(divider < arr.length){
		// Do not move this console.log
		console.log(arr.join(","));

		// Find the index of the minimum value in the unsorted half
		let minInd = divider;
		for(let i=divider+1; i <arr.length; i++){
			let el = arr[i];
			if(el < arr[minInd]){
				minInd = i;
			}
		}
		// Save the min value
		let minVal = arr[minInd]
		// Shift every unsorted value to the left of the min value to the right by 1
		for(let t=minInd; t>divider; t--){
			arr[t] = arr[t-1];
		}
		// Put the min value at the divider
		arr[divider] = minVal;
		// Increment the divider and repeat
		divider++;
	}
	return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
