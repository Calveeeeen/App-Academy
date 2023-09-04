/* Write a function reverseString(str) that takes in a string. The function should return a
new string where the order of the characters is reversed. */

// your code here
function reverseString(str){
    let arr=[];
    let reverseArr=[]
    for (let i=0; i<str.length; i++){
        letter = str[i];
        arr.push(letter);
    }
    for(let t=arr.length-1; t>=0; t--){
        let reverseLetter = arr[t]
        reverseArr.push(reverseLetter);
    }
    return reverseArr.join('');

}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
