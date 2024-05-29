function isPassing(assessments) {
    let scores = [];
    let sum =0;
    for(let i=0; i<assessments.length; i++){
        let obj = assessments[i];
        for(let i=0; i<obj.number; i++){
            scores.push(obj.score);
        }
    }
    for(let x=0;x<scores.length; x++){
        let num = scores[x];
        sum +=num;
    }
    let average = sum/scores.length;
    if(average > 70){
        return true;
    }
    return false;
}

const assessments1 = [
    { number: 1, score: 60 },
    { number: 2, score: 90 },
    { number: 3, score: 80 },
    { number: 4, score: 100 },
    { number: 5, score: 85 }
];

// isPassing(assessments1) // => true

const assessments2 = [
    { number: 1, score: 60 },
    { number: 2, score: 20 },
    { number: 3, score: 45 }
];

// isPassing(assessments2) // => false

console.log(isPassing(assessments1));
console.log(isPassing(assessments2));
