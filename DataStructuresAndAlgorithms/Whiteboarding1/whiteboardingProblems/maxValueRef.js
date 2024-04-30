function maxValue(arr){
    let max = 0;
    if(arr.length > 0){
        for(let i=0; i<arr.length; i++){
            let val = arr[i];
            if(val > max){
                max = val;
            }
        }
        return max;
    }
    else{
        return null;
    }
}


console.log(maxValue([12, 6, 43, 2]));
console.log(maxValue([]));
console.log(maxValue([-4, -10, 0.43]));
