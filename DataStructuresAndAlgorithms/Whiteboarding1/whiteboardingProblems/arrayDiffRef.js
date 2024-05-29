function arrayDiff(arr1 , arr2){
    let obj = {};
    let arr = [];

    for(let i=0; i<arr1.length; i++){
        for(let t=0; t<arr2.length; t++){
            let el1 = arr1[i];
            let el2 = arr2[t];

            if(el2 === el1){
                arr1.splice(i,1);
            }
        }
    }
    return arr1;
}

const array1 = [1, 23, 2, 43, 3, 4]
const array2 = [3, 23]
// arrayDiff(array1, array2)  // => [1, 2, 43 ,4]

const array3 = ['a', 'ab', 'c', 'd', 'c']
const array4 = ['d']
// arrayDiff(array3, array4)  // => ['a', 'ab', 'c', 'c']

console.log(arrayDiff(array1, array2));
console.log(arrayDiff(array3, array4));
