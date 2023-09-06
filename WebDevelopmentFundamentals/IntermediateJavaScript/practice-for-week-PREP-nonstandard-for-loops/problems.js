function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    // Your code here

    //create an empty arr;
    var empty = [];

    //scroll through array to find the values at odd indices
    for (let i = 0; i<arr.length; i++){
        if (i%2!=0){
            empty.push(arr[i]);
        }
    }
    return empty;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    // Your code here

    // empty array to hold values of odd indices.
    var empty =[];

    // count backwards and return new arr.
    if (arr.length > 0){
        for (i=arr.length-1; i>0; i--){
            if(i%2!=0){
                empty.push(arr[i]);
            }
        }
        return empty;
    }

    // return empty arr if arr length is less than 0
    else {
        return empty;
    }
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    // Your code here

    // create empty array to hold new values
    var empty=[];
    // iterate through the indices of the arr;
    for (let i=0; i<arr.length; i++){
        // iterating the square
        for (n = 0; n<=i; n++){
            if (i===2**n){
                empty.push(arr[i]);
            }
        }
    }
    return empty;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    // Your code here

    // create empty arr to hold new values;
    var empty=[];

    // return new values if they're to the nth power of that value;
    if (arr.length===0){
        return empty;
    }
    if (arr.length>0){
        //iterate the array
        for (let i=0; i<arr.length; i++){
            // base give n
            // iterate the exponent
            for (x=0; x<arr.length; x++){
                if (i === n**x){
                    empty.push(arr[i]);
                }
            }
        }
        return empty;
    }

    // while loop
    // let final = [];
    // let i=0;
    // while (arr.includes(n**i)){
    //     if (arr[n**i]!=undefined){
    //         final.push(arr[n**i]);

    //     }
    //     i++;
    // }
    // return final;
}


function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    // Your code here

    // empty array to hold new values
    var empty = [];
    // find the midpoint of the array for an array with odd indices.
    let x = (arr.length-1)/2;
    // find the midpoint of the array for an array with even indices.
    let y = arr.length/2

    // if the arr has an odd number of indices
    if (arr.length==0){
        return empty;
    }
    if (arr.length%2!=0){
        for (let i =0; i<x+1; i++){
            empty.push(arr[i]);
        }
        return empty;
    }
    if (arr.length%2==0){
        for (let i=0; i<y; i++){
            empty.push(arr[i]);
        }
        return empty;
    }


}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    // Your code here

     // empty array to hold new values
     var empty = [];
     // find the midpoint of the array for an array with odd indices.
     let x = (arr.length-1)/2;
     // find the midpoint of the array for an array with even indices.
     let y = (arr.length)/2

    // empty array
    if (arr.length==0){
        return empty;
    }
    // if the arr has an odd number of indices
    if (arr.length%2!=0){
        for (let i=arr.length; i>x+1; i--){
            empty.push(arr[i]);
        }
        return empty;
    }
    // if it's even
    if (arr.length%2==0){
        for (let i=arr.length; i>y; i--){
            empty.push(arr[i-1]);
        }
        return empty;
    }
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
