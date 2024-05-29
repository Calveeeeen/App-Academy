function zipArray(arr1, arr2){
    let newArr = [];
    for(let i=0; i<arr1.length; i++){
        let el1 = arr1[i];
        let el2 = arr2[i];
        let innerArr = [el1, el2];
        newArr.push(innerArr);
    }
    // for(let x=0; x<newArr.length; x++){
    //     console.log(newArr[x]);
    // }
    return newArr;
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
// result; // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]

console.log(result);
