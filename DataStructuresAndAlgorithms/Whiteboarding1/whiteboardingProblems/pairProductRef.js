function pairProduct(arr, num){
    let newArr= [];
    let i=0;
    while(i<arr.length){
        let j = i+1;
        while(j<arr.length){
            let el1= arr[i];
            let el2 = arr[j];
            let product = el1*el2;

            if(product ===num){
                newArr.push([i,j]);
            }

            j++;
        }
        i++
    }
    // for(let x=0;x<newArr.length;x++){
    //     let t=newArr[x];
    //     console.log(t);
    // }
    return newArr;
}

// pairProduct([1, 2, 3, 4, 5], 4); // => [ [ 0, 3 ] ]
// pairProduct([1, 2, 3, 4, 5], 8); // => [ [ 1, 3 ] ]
// pairProduct([1, 2, 3, 12, 8], 24); // => [ [ 1, 3 ], [ 2, 4 ] ]

console.log(pairProduct([1, 2, 3, 4, 5], 4));
console.log(pairProduct([1, 2, 3, 4, 5], 8));
console.log(pairProduct([1, 2, 3, 12, 8], 24));
