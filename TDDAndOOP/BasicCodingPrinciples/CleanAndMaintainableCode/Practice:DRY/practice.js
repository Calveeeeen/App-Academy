function compareNums(num1, num2) {
    let bigNum = 0;
    if (num1 > num2) {
        bigNum = num1;
    }
    else {
        bigNum = num2;
    }
    return bigNum;
}

function multiplyBiggerNumByTwo(num1, num2) {
    let bigNum = compareNums(num1, num2);
    let multiply = Number(bigNum) * 2;
    return multiply;
}

function divideBiggerNumByThree(num1, num2) {
    let bigNum = compareNums(num1, num2);
    return divide =bigNum/3;
}

function eatMostTacos(sum1, sum2) {
    let bigNum = compareNums(sum1, sum2);
    return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    let smallDog = compareNums(weight1, weight2);
    if (weight1 < weight2) {
        smallDog = weight1;
        return `I adopted a dog that weighs ${smallDog} pounds.`;
    } else {
        smallDog = weight2;
        return `I adopted a dog that weighs ${smallDog} pounds.`;
    }
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    multiplyBiggerNumByTwo,
    divideBiggerNumByThree,
    eatMostTacos,
    adoptSmallerDog
};
