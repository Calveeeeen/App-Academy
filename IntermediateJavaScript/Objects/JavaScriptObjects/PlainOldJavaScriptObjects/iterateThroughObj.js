/* Write a function printObject(obj) that prints out all key-value pairs
of an object. The format should be key - value.

HINT: use a for loop */

function printObject(obj) {
    // your code here...
    for (let pair in obj){
      console.log(pair +" - "+obj[pair]);
    }
}

let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

printObject(bootcamp); // prints
// name - App Academy
// color - Red
// population - 120
