function mindPsAndQs(str){
    let PQ = "PQ"
    let letters = str.split("");
    let count = 0;
    longest = 0;

    for(let i=0; i<letters.length; i++){
        let letter = letters[i];

        if(PQ.includes(letter)){
            count++;
            if(count > longest){
                longest = count;
            }
        }
        else{
            count = 0;
        }
    }
    return longest;
}

// mindPsAndQs('BOOTCAMP');  // => 1
// mindPsAndQs('APCDQQPPC');  // => 4
// mindPsAndQs('PQPQ');  // => 4
// mindPsAndQs('PPPXQPPPQ');  // => 5

console.log(mindPsAndQs('BOOTCAMP'));
console.log(mindPsAndQs('APCDQQPPC'));
console.log(mindPsAndQs('PQPQ'));
console.log(mindPsAndQs('PPPXQPPPQ'));
