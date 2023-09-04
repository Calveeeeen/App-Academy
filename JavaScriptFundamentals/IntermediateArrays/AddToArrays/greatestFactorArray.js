/* Write a function greatestFactorArray that takes in an array of numbers and
returns a new array where every even number is replaced with it's greatest
factor. A greatest factor is the largest number that divides another with no
remainder. For example, the greatest factor of 16 is 8. (For the purpose of
this problem we won't say the greatest factor of 16 is 16, because that
would be too easy). */

function greatestFactorArray(array) {
    // your code here
    let newArr=[]
    for (let i=0; i<array.length; i++){
        let num = array[i];
        if(num%2==0){
            let greatestFactor = num/2
            newArr.push(greatestFactor);
        }
        else if(num%2==1){
            newArr.push(num);
        }
    }
    return newArr;
}

console.log(greatestFactorArray([16, 7, 9, 14])); // [8, 7, 9, 7]
console.log(greatestFactorArray([30, 3, 24, 21, 10])); // [15, 3, 12, 21, 5]
