const chai = require("chai");
const reverseString = require("../problems/reverse-string");
const expect = chai.expect;

describe('reverseString', function() {
    it('should reverse the input "fun"', function() {
        expect(reverseString('fun')).to.equal("nuf");
    });

    it("should throw an error when the input is a number", function() {
        // Wrap the code that may throw an error in a function
        const incorrectInput1 = () => {
            reverseString(14);
        }

        // Use Chai's expect to check if it throws a TypeError
        expect(incorrectInput1).to.throw(TypeError, 'Input is not a string');
    });

    it('should throw an error when the input is an array', function() {
        // Wrap the code that may throw an error in a function
        const incorrectInput2 = () => {
            reverseString([]);
        }

        // Use Chai's expect to check if it throws a TypeError
        expect(incorrectInput2).to.throw(TypeError, 'Input is not a string');
    });
});
