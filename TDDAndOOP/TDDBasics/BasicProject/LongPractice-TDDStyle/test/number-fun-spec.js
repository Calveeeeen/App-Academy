// Your code here
const chai = require("chai");
const expect = chai.expect;
const {returnsThree, reciprocal} = require('../problems/number-fun');

describe("returnsThree", function(){
    returnsThree()
    it("function returns the number 3", function(){
        expect(returnsThree()).to.equal(3);
    });
});

describe('reciprocal', function(){
    const recip1 = reciprocal(3);
    const recip2 = reciprocal(4);
    it("returns the reciprocal of the input number", function(){
        expect(recip1).to.equal(`${1}/${3}`);
        expect(recip2).to.equal(`${1}/${4}`);
    });

    it("Should only take numbers between 1 and 1000000", function(){
        const n = 500;
        if (n < 1 || n > 1000000) {
            expect(() => someFunction(n)).to.throw(RangeError, "The input is out of the expected range");
        } else {
            const recip1 = reciprocal(n);
            expect(recip1).to.equal(`${1}/${n}`);
        }
    });
});
