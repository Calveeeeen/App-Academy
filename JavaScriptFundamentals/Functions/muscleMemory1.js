// Practice typing the syntax for functions. Write 10 functions with different messages and
// console.log them. Focus on using proper style and indentation. Be sure to test your code
// by running it after each repetition. You'll be surprised and also annoyed at what details
// you missed! Learn from those typos now and make your life easier.

function sayHello(name) {
    let msg = "Hello, " + name + ". How are you?";
    return msg;
}

console.log(sayHello("world"));

function add(num1, num2){
    return num1+num2;
}
console.log(add(3,4));

function helloWorld(){
    return 'hello world!';
}
console.log(helloWorld());

function multiply(num1, num2){
    return num1*num2;
}
console.log(multiply(5,6));

function subtract(num1,num2){
    return num1-num2;
}
console.log(subtract(10,2));

function divide(num1, num2){
    return num1/num2;
}
console.log(divide(15,3));

function modulo(num1,num2){
    return num1%num2;
}
console.log(modulo(10,3));

function fullName(firstName, lastName){
    return firstName +' ' + lastName;
}
console.log(fullName("John", 'Doe'));

function counter(num){
    let count=0
    for (let i=0; i<num; i++){
        count++
    }
    return count;
}
console.log(counter(5));

function double(num){
    return num*2;
}
console.log(double(5));

function half(num){
    return num/2;
}

  console.log(half(5));
