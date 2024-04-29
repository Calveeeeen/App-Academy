function logBetween(lowNum, highnum){
    let arr = new Array()
    for(let i = lowNum; i<= highnum; i++){
        arr.push(i);
    }
    return arr;
}

console.log(logBetween(-1, 2));
console.log(logBetween(14, 6));
console.log(logBetween(4, 6));
