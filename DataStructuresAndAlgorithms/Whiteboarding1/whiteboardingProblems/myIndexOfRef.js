function myIndexOf(array, target){
    for(let i=0; i<array.length; i++){
        let el = array[i];
        if(target == el){
            return i;
        }
    }
    return -1;
}

// myIndexOf([1,2,3,4],4); // => 3
// myIndexOf([5,6,7,8],2); // => -1

console.log(myIndexOf([1,2,3,4],4));
console.log(myIndexOf([5,6,7,8],2));
