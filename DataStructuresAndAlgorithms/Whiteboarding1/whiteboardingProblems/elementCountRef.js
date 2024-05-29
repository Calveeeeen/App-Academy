function elementCount(arr){
    let obj = {};
    for(let i=0; i<arr.length; i++){
        let el = arr[i];
        let key = el;

        if(obj[key] === undefined){
            obj[key] = 1;
        }
        else{
            obj[key]++;
        }
    }

    return obj;
}

// elementCount(["a", "a", "b", "b"]); // => { "a" : 2, "b" : 2 }
// elementCount(['c', 'a', 'c', 'a', 'b']); // => { "c": 2, "a": 2, "b": 1 }

console.log(elementCount(["a", "a", "b", "b"]));
console.log(elementCount(['c', 'a', 'c', 'a', 'b']));
