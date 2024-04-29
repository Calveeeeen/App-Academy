function printReverse(min, max){
    let arr= [];
    for(let i = max-1; i>min; i--){
        arr.push(i);
    }
    return arr;
}

console.log(printReverse(13,18));
console.log(printReverse(90,94));
