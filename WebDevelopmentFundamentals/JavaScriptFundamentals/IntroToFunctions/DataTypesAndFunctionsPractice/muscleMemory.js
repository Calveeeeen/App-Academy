// Practice typing the syntax for functions. Write 10 functions with different
// messages and console log them. Focus on using proper style and indentation.
// Be sure to test your code by running it after each repetition. You'll be
// surprised and also annoyed at what details you missed! Learn from those typos
// now and make your life easier.

function goodbyeMSG(name){
    let msg = 'Goodbye '+name+'.';
    return msg;
}

function helloMSG(name1, name2){
    let hi = 'Hey '+name1+' and '+name2+', how are you guys doing?';
    return hi;
}

function add(num1, num2){
    let math = num1 + num2;
    return math;
}

function subtract(num3, num4){
    let minus=num4-num3;
    return minus;
}

function emailStart(name){
    let start='Hi, '+name+' I hope this email finds you well';
    return start;
}

function msg2Fam(){
    return 'Yoooooo last night was lit';
}

function alert(){
    return 'Warning! the device battery has been overcharged and is overheating';
}

function warning(){
    return 'Warning, careful beverage is hot!';
}

function deadend(){
    return "the path that you're heading towards leads to a deadend";
}

function multiply(num5, num6, num7){
    let product = num5*num6*num7;
    return product;
}

console.log(multiply(1,2,3));
console.log(deadend());
console.log(warning());
console.log(alert());
console.log(msg2Fam());
console.log(emailStart('Ben'))
console.log(subtract(3,8));
console.log(add(3,4));
console.log(goodbyeMSG('frank'));
console.log(helloMSG('dan', 'john'));
