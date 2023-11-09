// Your code here
class Triangle{
    constructor(side1, side2, side3, isValid){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.isValid = false;
    }

    getPerimeter(){
        return this.side1+this.side2+this.side3;
    }

    hasValidSideLengths(){
        let side1 = this.side1;
        let side2 = this.side2;
        let side3 = this.side3;
        let sum1 = side1+side2;
        let sum2 = side1+side3;
        let sum3 = side2+side3;

        return  (sum1 > side3 && sum2 > side2 && sum3 > side1)
    }

    validate(){
       this.isValid = this.hasValidSideLengths();
    }

    static getValidTriangles(...triangles) {
        return triangles.filter((triangle) => triangle.hasValidSideLengths());
    }
}

class Scalene extends Triangle{
    constructor(side1, side2, side3, isValid){
        super(side1, side2, side3, isValid);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isScalene(){
        let side1 = this.side1;
        let side2 = this.side2;
        let side3 = this.side3;
        if(side1 !== side2 && side1 !== side3 && side2!==side3){
            return true;
        }
        else{
            return false;
        }
    }

    validate(){
        this.isValidScalene = this.isScalene();
    }
}

class Isosceles extends Triangle{
    constructor(side1,side2,side3, isValid){
        super(side1, side2, side3, isValid);
        this.isValidTriangle = this.hasValidSideLengths();
    }

    isIsosceles(){
        let side1 = this.side1;
        let side2 = this.side2;
        let side3 = this.side3;
        let param1 = ((side1 == side2) && (side1 !== side3) && (side2 !== side3));
        let param2 = ((side1 == side3) && (side1 !== side2) && (side1 !== side2));
        let param3 = ((side2 == side3) && (side2 !== side1) && (side3 !== side1));
        if (param1 == true || param2 == true || param3 == true){
            return true;
        }
        else{
            return false;
        }
    }

    validate(){
        if(this.isIsosceles() === true){
            this.isValidIsosceles = true;
        }
        else{
            this.isValidIsosceles = false;
        }
    }

}
module.exports = {Triangle, Scalene, Isosceles};
