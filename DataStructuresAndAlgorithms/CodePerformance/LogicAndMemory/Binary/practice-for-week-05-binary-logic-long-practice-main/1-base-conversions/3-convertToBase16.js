// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  // Your code here
  let hexChar = '0123456789abcdef';
  // convert binary to base10
  if(typeof element == 'string'){
    let sum = 0;
    let arr = element.split('').reverse();
    for(let i=0; i<arr.length; i++){
      let el = arr[i];
      if(el=='b'){
        if(sum < 9){
          return '0x'+sum;
        }
        else if(9 < sum  && sum < 15){
          let letter = hexChar.charAt(sum);

          return '0x'.concat(letter);
        }
        else if(sum > 15){
          let hexDec = ''
          while(sum>0){
            let r = sum%16;
            hexDec = hexChar.charAt(r) + hexDec;
            sum = Math.floor(sum/16);
          }
          return '0x'+hexDec;
        }
      }
      if (el != 'b'){
        let value = (2**i)*el;
        sum+=value;
      }
    }
  }
  if(typeof element == 'number'){
    if(element < 9){
      return '0x'+element;
    }
    else if(9 < element  && element < 15){
      let letter = hexChar.charAt(element);

      return '0x'.concat(letter);
    }
    else if(element > 15){
      let hexDec = ''
      while(element>0){
        let r = element%16;
        hexDec = hexChar.charAt(r) + hexDec;
        element = Math.floor(element/16);
      }
      return '0x'+hexDec;
    }
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
