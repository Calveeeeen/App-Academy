function collapseString(str){
    let newStr = [];
    let chars = str.split("");
    for(let i=0; i<chars.length; i++){
        let char = chars[i];
        let next = chars[i+1];

        if(char === next){
            continue;
        }
        else{
            newStr.push(char)
        }
    }
    return newStr.join("");
}

// collapseString('apple'); // => 'aple'
// collapseString('AAAaalviiiiin!!!'); // => 'Aalvin!'
// collapseString('hello app academy'); // => 'helo ap academy'

console.log(collapseString('apple'));
console.log(collapseString('AAAaalviiiiin!!!'));
console.log(collapseString('hello app academy'));
