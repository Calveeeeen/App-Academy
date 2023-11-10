// Your code here
const chai = require("chai");
const expect = chai.expect;
const myMap = require("../problems/my-map");



describe("myMap()", function(){
    describe("Create a myMap function that has the follow properties", function(){
        it("should take in parameter array, which is an array", function(){
            const inputArray = [1,2,3];
            myMap(inputArray, double);
            expect(inputArray).to.be.an('array');
        })
        it("should take in a secondary parameter callback that takes in a function", function(){
            myMap([1,2,3], double);
            expect(double).to.be.an('function');
        });
        it("myMap(inputArray, double) should double the values in the original array", function(){
            myMap([1,2,3], double);
            const expected = [2,4,6];
            expect(myMap([1,2,3], double)).to.deep.equal(expected);
        })
    });
});
