/* Write a function leastCommonMultiple(num1, num2) that accepts two numbers
as arguments. The functions should return the smallest number that is divisible
by both num1 and num2. */

// your code here
function leastCommonMultiple(num1, num2){
    let product = num1 * num2;
    for(let i=1; i<=num2; i++){
        let value1= num1*i;
        for(let t=1; t<=num1; t++){
            let value2 = num2*t;
            if(value1 == value2){
                return value1;
            }
        }
    }
}


console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10
