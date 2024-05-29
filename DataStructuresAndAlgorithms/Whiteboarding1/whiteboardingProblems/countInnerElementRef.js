function countInnerElement(arr){
    let obj = {};

    for(let i =0; i<arr.length; i++){
        let innerArr = arr[i];


        for(let t=0; t<innerArr.length; t++){
            let el = innerArr[t];
            let key = el;
            if(obj[key] === undefined){
                obj[key] = 1;
            }
            else{
                obj[key]++;
            }
        }
    }
    return obj;
}


const arr1 = [
    [1, 2, 4, 5],
    [2, 7, 4],
    [1, 4, 5, 2, 7]
]

// countInnerElement(arr1)  // => {1: 2, 2: 3, 4: 3, 5: 2, 7: 2}

const arr2 = [
    ['a','b','c','d'],
    ['a','b'],
    ['a','c','d','a']
]

// countInnerElement(arr2)  // => {a: 4, b: 2, c: 2, d: 2}

console.log(countInnerElement(arr1));
console.log(countInnerElement(arr2));
