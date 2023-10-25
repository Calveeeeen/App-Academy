const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);

const Employee = require('../employee');
const Manager = require('../manager');

describe('The calculateBonus(multiplier) method:', () => {
    let Hobbes;
    let Calvin;
    let Susie;


    describe('Manager.calculateBonus()', () => {
        it('should multiply the Manager\'s salary + a total sub salary of employees under them by a passed in multiplier LOL', () => {
            expect(Hobbes.calculateBonus(0.05)).to.eql(70500);
            expect(Calvin.calculateBonus(0.05)).to.eql(20500);
            expect(Susie.calculateBonus(0.05)).to.eql(14000);
        });
    });

    describe('Manager.calculateBonus()', () => {
        it('should multiply the Employee\'s salary by a passed in multiplier', () => {
            expect(Lily.calculateBonus(0.05)).to.equal(4500);
            expect(Clifford.calculateBonus(0.05)).to.equal(4500);
        });
    });
});
