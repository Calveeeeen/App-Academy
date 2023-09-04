/* Write a function alternatingWords that accepts an array of words as an argument. The
function should mutate the input array such that the words alternate between fully uppercase
or lowercase. The first word should be uppercase. */

// Your code here
function alternatingWords(arr){
    for (let i=0; i<arr.length; i++){
        let word = arr[i];
        // check if i is 0 or even;
        if(i==0 || i%2==0){
            let upperCase = word.toUpperCase();
            arr[i] = upperCase
        }
        if(i==1 || i%2==1){
            let lowerCase = word.toLowerCase();
            arr[i] =lowerCase;
        }
    }
    return arr;
}


let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]
