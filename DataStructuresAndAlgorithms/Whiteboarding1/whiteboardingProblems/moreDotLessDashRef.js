function moreDotLessDash(str){
    let dotCounter = 0;
    let dashCounter = 0;
    let chars = str.split("");

    for(let i=0; i<chars.length; i++){
        let char = chars[i];
        if(char === "-"){
            dashCounter++;
        }
        if(char === "."){
            dotCounter++;
        }
    }

    if(dotCounter > dashCounter){
        return true;
    }
    return false;
}

// moreDotLessDash('2-D arrays are fun. I think.');  // => true
// moreDotLessDash('.-.-.');  // => true
// moreDotLessDash('.-');  // => false
// moreDotLessDash('..--');  // => false

console.log(moreDotLessDash('2-D arrays are fun. I think.'));
console.log(moreDotLessDash('.-.-.'));
console.log(moreDotLessDash('.-'));
console.log(moreDotLessDash('..--'));
