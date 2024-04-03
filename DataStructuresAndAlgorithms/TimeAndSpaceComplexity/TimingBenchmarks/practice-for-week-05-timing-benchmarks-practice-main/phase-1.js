// Adds up positive integers from 1-n
function addNums(n) {
  // Fill this in
  let sum=0;
  for(let i=0; i<=n; i++){
    let num = i;
    sum +=num;
  }
  return sum;
}


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in
  let sum=0;
  for(let i=0; i<=n; i++){
    let num = addNums(i);
    sum += num;
  }
  return sum;
}



module.exports = [addNums, addManyNums];
