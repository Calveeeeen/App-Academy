function intersect(arr1, arr2){
    let dupe = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            let el1 = arr1[i];
            let el2 = arr2[j];
            if(el1 == el2){
                dupe.push(el2);
            }
        }
    }
    return dupe;
}

// intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) // => [ 'b', 'd' ]
// intersect(['a', 'b', 'c'], ['x', 'y', 'z']) // => []

console.log(intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']));
console.log(intersect(['a', 'b', 'c'], ['x', 'y', 'z']));
