function logBetweenStepper(min, max, step){
    let arr = [];
    for(let i = min; i<=max; i+=step){
        arr.push(i);
    }
    return arr;
}

console.log(logBetweenStepper(5,9,1));
console.log(logBetweenStepper(-10, 15, 5));
