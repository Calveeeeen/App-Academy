function valueCounter(obj, val){
    let counter = 0;
    for(let key in obj){
        if(obj[key] == val){
            counter++;
        }
    }
    return counter;
}

const obj1 = { 1: 'Anne', 2: 'Alvin', 3: 'Anne', 4: 'Anne' }
// valueCounter(obj1, 'Anne')  // => 3

const obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 }
// valueCounter(obj2, 88)  // => 0

const pairs = { Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne' }
// valueCounter(pairs, 'Roman')  // => 2

console.log(valueCounter(obj1, 'Anne'));
console.log(valueCounter(obj2, 88));
console.log(valueCounter(pairs, 'Roman'));
