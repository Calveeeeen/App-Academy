function valueConcat(array, obj){
    for(let i=0; i<array.length; i++){
        let key = array[i];
        if(key in obj){
            array[i] = key.concat(obj[key]);
        }
    }
    return array;
}

const arr1 = ['alex', 'maurice', 'meagan', 'ali'];
const obj1 = { alex: 'bronca', ali: 'harris' }
valueConcat(arr1, obj1) // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]

let arr2 = ['a', 'b', 'c'];
let obj2 = { b: 2, c: 3 }
valueConcat(arr2, obj2) // => [ 'a', 'b2', 'c3' ]

console.log(valueConcat(arr1, obj1));
console.log(valueConcat(arr2, obj2));
