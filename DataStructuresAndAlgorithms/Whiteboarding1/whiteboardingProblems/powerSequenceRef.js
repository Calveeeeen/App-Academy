function powerSequence(base, length){
    let nums = [];

    for(let i=1; i<=length; i++){
        let power = base ** i;

        nums.push(power);
    }
    return nums;
}

powerSequence(3, 4);  // => [ 3, 9, 27, 81 ]
powerSequence(2, 6);  // => [ 2, 4, 8, 16, 32, 64 ]
powerSequence(8, 3);  // => [ 8, 64, 512 ]

console.log(powerSequence(3, 4));
console.log(powerSequence(2, 6));
console.log(powerSequence(8, 3));
