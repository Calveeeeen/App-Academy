// Convert the integers in the console.logs below to base 10:

const { sort } = require("../../../../BigOPractice/practice-for-week-05-array-long-practice-main/array-practice");

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  // convert binary to base10
  let sum = 0;
  if(str.includes("b")){
    let strArr = str.split('').reverse();
    // calculate the values to be added to become base10
    for(let i=0; i<strArr.length; i++){
      let el = strArr[i];
      if(el === 'b'){
        return sum;
      }
      else{
        let value = (2**i)*el
        sum += value;
      }
    }
  }

  // convert hexdecimal to base10
  if(str.includes('0x')){
    let sum = 0;
    let strArr = str.split('').reverse();
    // calculate values to be added to become base10
    for(let i=0; i<strArr.length; i++){
      let el = strArr[i];
      let value = (16**i)*el
      if(el === 'x'){
        return sum;
      }
      else{
        if(!('abcdef'.includes(el))){
          sum+=value;
        }
        else if(el === 'a'){
          el = 10;
          value = (16**i)*el;
          sum+= value;
        }
        else if( el === 'b'){
          el = 11;
          value = (16**i)*el;
          sum+=value;
        }
        else if(el === 'c'){
          el = 12;
          value = (16**i)*el;
          sum+=value;
        }
        else if(el === 'd'){
          el = 13;
          value = (16**i)*el;
          sum+=value;
        }
        else if(el === 'e'){
          el = 14;
          value = (16**i)*el;
          sum+=value;
        }
        else if(el === 'f'){
          el = 15;
          value = (16**i)*el;
          sum+=value;
        }
      }
    }
  }
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914
