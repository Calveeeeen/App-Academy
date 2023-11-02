function isFive(num) {
  // Your code here
  if (num===Number(5)){
    return true;
  }
  return false;
}

function isOdd(number) {
  // Your code here
  if(number%2 ==0){
    return false;;
  }
  else if(typeof number !== 'number'){
    throw new Error("This is not a number");
  }
  return true;

}

function myRange(min, max, step = 1) {
  // Your code here
  let newArr = [];
  if(step != null){
    for(let i=min; i<=max; i+=step){
      newArr.push(i);
    }
  }
  else{
    for(let i= min; i<=max; i+= step){
      newArr.push(i);
    }
  }
  return newArr;
}


module.exports = { isFive, isOdd, myRange };
