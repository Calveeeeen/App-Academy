// Your code here
const Employee = require("./employee");

const employee = new Employee(
    'John Wick',
    "Dog Lover"
);

// console.log(employee);
// employee.sayName();

let sayNameFunc = employee.sayName;
sayHello = sayNameFunc.bind(employee);

sayHello();
global.setTimeout(sayHello, 2000);


let sayOcuupationFunc = employee.sayOccupation;
sayOcc = sayOcuupationFunc.bind(employee);

sayOcc();
global.setTimeout(sayOcc, 3000);
