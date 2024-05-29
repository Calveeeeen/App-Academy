function peakFinder(arr){
    let peakInd = [];
    for(let i=0; i<arr.length; i++){
        let prev = arr[i-1];
        let curr = arr[i];
        let next = arr[i+1];
        if(prev == null){
            prev = 0
        }
        else{
            prev = arr[i-1];
        }
        if(next == null){
            next = 0;
        }
        else{
            next = arr[i+1];
        }
        if(curr > prev && curr > next){
            peakInd.push(i);
        }
    }
    return peakInd;
}

// peakFinder([1, 2, 3, 2, 1]); // => [2]
// peakFinder([2, 1, 2, 3, 4, 5]); // => [0, 5]
// peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]); // => [2, 6, 8]

console.log(peakFinder([1, 2, 3, 2, 1]));
console.log(peakFinder([2, 1, 2, 3, 4, 5]));
console.log(peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]));
