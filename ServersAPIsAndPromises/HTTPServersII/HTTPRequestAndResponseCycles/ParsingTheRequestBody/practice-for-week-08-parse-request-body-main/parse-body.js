function firstStep(input) {
  // Your code here
  let keyValPair = input.split("&");
  return keyValPair;
}

function secondStep(input) {
  // Your code here
  let keyValPair = [];
  for(let i=0; i<input.length; i++){
    val = input[i];
    let keyVal = val.split("=");
    keyValPair.push(keyVal);
  }
  return keyValPair;
}

function thirdStep(input) {
  // Your code here
  if (!input || !input[0] || typeof input[0][1] !== "string") return input;

  input[0][1] = input[0][1].replace(/\+/g, " ");
  return input;
}

function fourthStep(input) {
  // Your code here
  if (!input[1] || typeof input[1][1] !== "string") return input;

  let passStr = input[1][1];
  let newPassStr = decodeURI(passStr);
  input[1][1] = newPassStr;

  return input;
}

function fifthStep(input) {
  // Your code here
  let obj = {};
  for(let i=0; i<input.length; i++){
    obj[input[i][0]] = input[i][1];
  }
  return obj;
}

function parseBody(str) {
  // Your code here
  let val1 = firstStep(str);
  let val2 = secondStep(val1);
  let val3 = thirdStep(val2);
  let val4 = fourthStep(val3);
  return fifthStep(val4);
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};