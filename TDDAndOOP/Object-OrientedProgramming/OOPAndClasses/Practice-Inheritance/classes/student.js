const Person = require('./person');

// Your code here
class Student extends Person {

  constructor(firstName, lastName, major, GPA){
    super(firstName, lastName);
    this.major = major;
    this.GPA = GPA;
  }

  static compareGPA(student1, student2){
    if(student1.GPA > student2.GPA){
      let name = `${student1.firstName} ${student1.lastName}`;
      return `${name} has the higher GPA.`;
    }
    else if (student2.GPA > student1.GPA){
      let name = `${student2.firstName} ${student2.lastName}`;
      return `${name} has the higher GPA.`;
    }
    else{
      return "Both students have the same GPA";
    }
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}
