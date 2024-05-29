function twoDiff(arr){
    let pos = [];
    for(let i=0; i<arr.length; i++){
        for(t=i+1; t<arr.length; t++){
            let el1= arr[i];
            let el2 = arr[t];
            let diff = el1-el2;
            if(diff == 2){
                pos.push([i,t]);
            }
            else if(diff == -2){
                pos.push([i,t]);
            }

        }
    }
    // for(let g=0; g<pos.length; g++){
    //     let posArr = pos[g];
    //     console.log(posArr);
    // }
    return pos;
}

// twoDiff([2, 3, 4, 6, 1, 7])  // => [[0, 2], [1, 4], [2, 3]]
// twoDiff([0, 2, 4, 3, 5])  // => [[0, 1], [1, 2], [3,4]]
// twoDiff([])  // => []

console.log(twoDiff([2, 3, 4, 6, 1, 7]));
console.log(twoDiff([0, 2, 4, 3, 5]));
console.log(twoDiff([]));
