function oddRange(end){
    let range = [];
    for(let i = 1; i<=end; i+=2){
        range.push(i);
    }
    return range;
}


console.log(oddRange(13));
console.log(oddRange(6));
