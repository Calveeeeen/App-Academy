class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if(typeof obj !== 'object'){
      throw new TypeError("Argument is not an Object");
    }
    else if (obj.name === null) {
      throw new TypeError("Incoming object must have a name value");
    }
    else if (obj.age === null) {
      throw new TypeError("Incoming object must have an age value");
    }
    else {
      // obj = {name: "ali, age: 22"}
      this.name = obj.name;
      this.age = obj.age;
    }
  }

  tryUpdate(obj){
    try{
      if(typeof obj ==='object'){
        this.name = obj.name;
        this.age = obj.age
        return true;
      }
      else{
        throw new TypeError("This is not an Object");
      }
    }
    catch(error){
      console.error(error);
      return false;
    }
  }

  static greetAll(arr){
    let newArr = [];
    arr.forEach(function(el){
      let str = el.sayHello();
      newArr.push(str);
    });
    return newArr;
  }
}

module.exports = Person;
