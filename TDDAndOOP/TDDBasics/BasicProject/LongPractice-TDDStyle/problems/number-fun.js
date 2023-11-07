function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  if(n>=1 && n <=1000000){
    return `${1}/${n}`;
  }
  else{
    throw new RangeError("The input is out of the expected range");
  }
}

module.exports = {
  returnsThree,
  reciprocal
};
