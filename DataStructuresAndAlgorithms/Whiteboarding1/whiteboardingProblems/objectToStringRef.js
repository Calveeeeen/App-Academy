function objectToString(count){
    let arr = [];
    for(key in count){
        let num = count[key];
        for(let i=0; i<num; i++){
            arr.push(key)
        }
    }
    return arr.join("");
}
// objectToString({ a : 2, b: 4, c: 1 }) // => 'aabbbbc'
// objectToString({ b: 1, o: 2, t: 1 }) // => 'boot'

console.log(objectToString({ a : 2, b: 4, c: 1 }));
console.log(objectToString({ b: 1, o: 2, t: 1 }));
