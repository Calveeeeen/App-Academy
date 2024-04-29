function fizzbuzz(max){
    let arr = [];
    for(let i=0; i<max; i++){
        if(i%3==0 && i%5!=0 || i%5==0 && i%3!=0){
            arr.push(i);
        }
    }
    return arr;
}

// maybe can refactor by using a cache
console.log(fizzbuzz(20));
