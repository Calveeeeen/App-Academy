const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager=null, employees=[]) {
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multiplier) {
        let subSalary = this._totalSubSalary();
        let bonus = (this.salary + subSalary) * multiplier;
        return bonus;
    }

    _totalSubSalary() {
        let sum = 0;
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else if (employee instanceof Employee) {
                sum += employee.salary;
            }
        }
        return sum;
    }
}
const splinter = new Manager('Splinter', 100000, 'Sensei');
const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log(splinter.calculateBonus(0.05)); // => 22500
console.log(leo.calculateBonus(0.05)); // => 17500
console.log(raph.calculateBonus(0.05)); // => 13000

const Hobbes = new Manager('Hobbes', 1000000, 'Founder');
const Calvin = new Manager('Calvin', 130000, 'Director', Hobbes);
const Susie = new Manager('Susie', 100000, 'TA Manager', Calvin);
const Lily = new Employee('Lily', 90000, 'TA', Susie);
const Clifford = new Employee('Clifford', 90000, 'TA', Susie);


console.log(Hobbes.calculateBonus(0.05)); // => 70,500
console.log(Calvin.calculateBonus(0.05)); // => 20500
console.log(Susie.calculateBonus(0.05)); // => 14000
console.log(Lily.calculateBonus(0.05)); // => 4500
console.log(Clifford.calculateBonus(0.05)); // => 4500

module.exports = Manager;
