// Your code here
const chai = require("chai");
const expect = chai.expect;
const {Triangle, Scalene, Isosceles} = require("../problems/triangle");

describe("Triangle", function(){
    describe("Constructor", function(){
        it("Constructor should have the properties of all 3 sides. (side1, side2, side3", function(){
            const normalTri = new Triangle(20,25,30)
            expect(normalTri).to.have.property("side1", 20);
            expect(normalTri).to.have.property('side2', 25);
            expect(normalTri).to.have.property('side3', 30);
        })
    });

    describe("getPerimeter()", function(){
        it("Returns the of the triangle", function(){
            const tri = new Triangle(10,10,10);
            let perim = tri.getPerimeter();
            expect(perim).to.equal(30);
        });
    });

    describe("hasValidSideLengths()", function(){
        const tri = new Triangle(4,5,6);
        const valid1 = tri.hasValidSideLengths();
        const tri2 = new Triangle(1,4,5);
        const valid2 = tri2.hasValidSideLengths();
        it("Should return true if the triangle is valid. For a triangle to be valid the sum of any 2 sides must be greater than the third side", function(){
            expect(valid1).to.equal(true);
        });
        it("Should return false if the triangle is not valid", function(){
            expect(valid2).to.equal(false);
        })
    });

    describe("validate()", function(){
        it("Should add an isValid property to the triangle", function(){
            const tri1 = new Triangle(10, 11, 12);
            const tri2 = new Triangle(1,2,3);

            if(tri1.isValid === true){
                expect(tri1.isValid).to.be.true;
            }
            else if(tri2.isValid === false){
                expect(tri2.isValid).to.be.false;
            }

        });
    });

    describe('getValidTriangles', function(){
        it("create a static method that takes in an arbitrary number of triangle instances, and returns all of the instances that are valid triangles", function(){
            const tri1 = new Triangle(10,11,12); //true
            const tri2 = new Triangle(2,4,5);//true
            const tri3 = new Triangle(2,2,5);//false
            const tri4 = new Triangle(6, 8, 10); // true
            const tri = [tri1, tri2, tri3, tri4]
            const validTri = Triangle.getValidTriangles(...tri);

            expect(validTri).to.be.an("array");

            expect(validTri).to.have.lengthOf(3);

            validTri.forEach(function(el){
                expect(el).to.be.an.instanceOf(Triangle);
            });
        });
    });
});

describe("Scalene", function(){
    describe("Scalene Should inherit from Triangle", function(){
        it("Scalene should inherit from Triangle", function(){
            const scalTri = new Scalene(4,5,6);
            expect(scalTri instanceof Triangle).to.be.true;
        });

        it("Should have 3 different lengths and isValidTriangle property", function(){
            const scalTri = new Scalene(4,5,6, true);
            expect(scalTri).to.have.property("side1", 4);
            expect(scalTri).to.have.property("side2", 5);
            expect(scalTri).to.have.property("side3", 6);
            expect(scalTri).to.have.property("isValidTriangle");
        });

        it("isValidTriangle property should derive from the Triangle class hasValidSideLengths()", function(){
            const scalTri = new Scalene(4,5,6, true);
            expect(scalTri.isValidTriangle).to.equal(scalTri.hasValidSideLengths());
        });
    });

    describe("Create an isScalene() method", function(){
        it("That return true if it is valid, only valid if all sides are different length", function(){
            const scalTri1 = new Scalene(4,5,6);
            expect(scalTri1.isScalene()).to.be.true;
        });

        it("That return false, if not all the sides are different lengths", function(){
            const scalTri2 = new Scalene(2,2,3);
            expect(scalTri2.isScalene()).to.be.false;
        });
    });

    describe("Create a validate() instance method", function(){
        it("Should add isValidScalene property to the scalene triangle instance", function(){
            const scalTri = new Scalene(4,5,6);
            scalTri.validate();
            expect(scalTri.isValidScalene).to.be.true;
        });
        it("Should add a false property to the instance triangle if not all the sides are the same",function(){
            const scalTri2 = new Scalene(2,2,3);
            scalTri2.validate();
            expect(scalTri2.isValidScalene).to.be.false;
        });
    });
});

describe("Isosceles", function(){
    describe("Isoscles Should inherit from Triangle", function(){
        it("Isosceles should inherit from Triangle", function(){
            const isosTri = new Isosceles(4,4,6);
            expect(isosTri instanceof Triangle).to.be.true;
        });

        it("Should have 2 legs with the same lengths and 1 legs with a different length, also will have a isValidTriangle property", function(){
            const isosTri = new Isosceles(4,4,6, true);
            expect(isosTri).to.have.property("side1", 4);
            expect(isosTri).to.have.property("side2", 4);
            expect(isosTri).to.have.property("side3", 6);
            expect(isosTri).to.have.property("isValidTriangle");
        });

        it("isValidTriangle property should derive from the Triangle class hasValidSideLengths()", function(){
            const isosTri = new Isosceles(4,4,6, true);
            expect(isosTri.isValidTriangle).to.equal(isosTri.hasValidSideLengths());
        });
    });

    describe("Create an isIsosceles() instance method", function(){
        it("should check whether or not the triangle is an isosceles triangle", function(){
            const isosTri = new Isosceles(2,2,3);
            const tri = new Isosceles(4,5,6);

            expect(isosTri.isIsosceles()).to.be.true;
            expect(tri.isIsosceles()).to.be.false;
        });
    });

    describe("Create a validate() instance method", function(){


        it("Should add isValidIsosceles property of true to the triangle if the triangle is a valid Isosceles triangle", function(){
            const isosTri = new Isosceles(2,2,3);
            isosTri.validate();
            expect(isosTri.isValidIsosceles).to.equal(true);
        });
        it("Should add isValidIsosceles property of false to the triangle if the triangle is not a valid Isosceles triangle", function(){
            const Tri = new Isosceles(4,5,6);
            Tri.validate();
            expect(Tri.isValidIsosceles).to.equal(false);
        })
    });
});
