// Your code here
const chai = require("chai");
const expect = chai.expect;
const Person = require("../problems/person");

describe("Person", function () {

    describe("Constructor", function () {
        it("Constructor should have a name and age property", function () {
            const John = new Person("John", 35);
            expect(John).to.have.property("name", "John");
            expect(John).to.have.property("age", 35);
        });
    })

    describe("SayHello() Instance Method", function () {
        it("create an sayHello() instance method to return a string of Person instance's name and a greeting message", function () {
            const John = new Person("John", 35);
            const greeting = John.sayHello();
            expect(greeting).to.equal("Hello, my name is John and I am 35 years old.");
        });
    });

    describe("Visit() Instance Method", function () {
        it("creates a visit() instance method that will have this instance visit an inputed instance person", function () {
            const John = new Person("John", 35);
            const Bob = new Person("Bob", 33);
            const visits = John.visit(Bob);
            expect(visits).to.equal("John visited Bob");
        });
    });

    describe("switchVisit() Instance Method", function () {
        it("Create instance method switchVisit() that will invoke the visit function of the parameter (otherPerson) passing in the current instance as the argument", function () {
            const John = new Person("John", 35);
            const Bob = new Person("Bob", 33);
            const switchVisits = John.switchVisit(Bob);
            expect(switchVisits).to.equal("Bob visited John");
        });
    });

    describe("Update() Instance Method", function () {
        it("create instance method. If incoming argument is not an object throw new typeError with a clear message", function () {
            const John = new Person("John", 35);

            try {
                John.update('hello');
                expect().fail("Expect a typeError to be thrown because of invalid parameter");
            }
            catch (error) {
                expect(error).to.be.an.instanceOf(TypeError);
                expect(error.message).to.equal("Argument is not an Object");
                expect(John.name).to.equal("John");
                expect(John.age).to.equal(35);
            }
        });

        it("Missing age properties", function () {
            const John = new Person("John", 35);
            const Ali = new Person("Ali", null);

            try {
                John.update(Ali);
                expect().fail("Missing age properties");
            }
            catch (error) {
                expect(error).to.be.an.instanceOf(TypeError);
                expect(error.message).to.equal("Incoming object must have an age value");
                expect(John.name).to.equal("John");
                expect(John.age).to.equal(35);
            }
        });

        it("Missing name property", function () {
            const John = new Person("John", 35)
            const Joy = new Person(null, 37);
            try {
                John.update(Joy);
                expect().fail("Missing name property");
            }
            catch (error) {
                expect(error).to.be.an.instanceOf(TypeError);
                expect(error.message).to.equal("Incoming object must have a name value");
                expect(John.name).to.equal("John");
                expect(John.age).to.equal(35);
            }
        });

        it("Update properties when the incoming object is valid", function () {
            const John = new Person("John", 35);
            const updated = John.update({ name: "Ali", age: 23 });

            expect(John.name).to.equal("Ali");
            expect(John.age).to.equal(23);
        });
    });

    describe("tryUpdate(obj) Instance Method", function () {
        it("should successfully update and return true", function(){
            const John = new Person("John", 35);
            const obj = {name: "Joy", age: 23};
            const result = John.tryUpdate(obj);

            expect(result).to.be.true;
            expect(John.name).to.equal("Joy");
            expect(John.age).to.equal(23);
        });

        it("Should fail to update and return false", function(){
            const John = new Person("John", 35);
            const obj = 'string';
            const result = John.tryUpdate(obj);

            expect(result).to.be.false;
            expect(John.name).to.equal("John");
            expect(John.age).to.equal(35);
        });

    });
    describe("greetAll() Static Method", function(){
        it("will take an array of Persons as the parameter and then call the sayHello method on each person and store each return in an array and then return the array", function(){
            const people = [new Person('Ali', 23), new Person("Joy", 22), new Person('Bob', 27)];

            const greetings = Person.greetAll(people)

            expect(greetings).to.be.an('array');
            expect(greetings).to.have.length(3);

            expect(greetings[0]).to.equal("Hello, my name is Ali and I am 23 years old.");
            expect(greetings[1]).to.equal("Hello, my name is Joy and I am 22 years old.");
            expect(greetings[2]).to.equal("Hello, my name is Bob and I am 27 years old.");
        });
    });
})
