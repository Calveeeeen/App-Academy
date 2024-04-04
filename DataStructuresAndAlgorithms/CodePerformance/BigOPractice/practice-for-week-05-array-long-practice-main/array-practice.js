const findMinimum = arr => {
  // Your code here
  let smallest = arr[0];
  for(let i=0; i<arr.length; i++){
    let el = arr[i];
    if(el < smallest){
      smallest = el;
    }
  }
  return smallest;
};

const runningSum = arr => {
  // Your code here
  let sum = 0;
  for(let i=0; i<arr.length; i++){
    let el = arr[i];
    sum += el;
    arr[i] = sum;
  }
  return arr;
};

const evenNumOfChars = arr => {
  let count =0;
  // Your code here
  for(let i=0; i<arr.length; i++){
    let str = arr[i];
    let length = str.length;
    if(length%2==0){
      count++;
    }
  }
  return count;
};

const smallerThanCurr = arr => {
  // Your code here
  let newArr = [];
  for(let i=0; i<arr.length; i++){
    let count =0;
    for(let j=0; j<arr.length; j++){
      let firstNum = arr[i];
      let secondNum = arr[j];
      if(secondNum < firstNum){
        count++;
      }
      else{
        continue;
      }
    }
    newArr.push(count);
  }

  return newArr;
};

const twoSum = (arr, target) => {
  // Your code here
  let newArr = [];
  for(i=0; i<arr.length; i++){
    for(let j=0; j<arr.length; j++){
      let num1 = arr[i];
      let num2 = arr[j];
      let sum = num1 + num2;
      if(sum == target && num1 != num2){
        newArr.push([num1, num2]);
      }
    }
  }
  if(newArr.length !== 0){
    return true;
  }
  return false;
};

const secondLargest = arr => {
  // Your code here
  let reverseSort = arr.sort((a,b) => b-a);
  return reverseSort[1];
};

const shuffle = (arr) => {
  // Your code here
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
