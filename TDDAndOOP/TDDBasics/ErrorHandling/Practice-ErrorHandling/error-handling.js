// 1.
function calcSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
try{
  let res = calcSum(null);
  console.log(res);
}
catch (error){
  console.log("This is an empty array");
}



// 2.
// tests
// sayName("Alex");
// sayName(1);
// Your code here
function sayName(name){
  if (typeof name !== 'string') {
    throw new TypeError('Invalid name! Must be a string!');
  }
  else {
    console.log(name);
  }
}
try{
  sayName('Alex');
  sayName(1)
}
catch (error){
  console.error(error.message);

}

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try{
  greet(null)
}
catch(error){
  console.error(error.message);
  console.log('Hello World!');
}
