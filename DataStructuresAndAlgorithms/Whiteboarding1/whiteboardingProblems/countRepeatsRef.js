function countRepeats(string){
    let count =0;
    let obj = {};

    for(let i=0; i<string.length; i++){
        let letter = string[i];
        let key = letter;

        if(key in obj){
            obj[key]++
        }
        else{
            obj[key] = 1;
        }

    }
    for (key in obj){
        if(obj[key] > 1){
            count++
        }
    }
    return count;
}

countRepeats('calvin'); // => 0
countRepeats('caaaalvin'); // => 1
countRepeats('pops'); // => 1
countRepeats('mississippi'); // => 3
countRepeats('hellobootcampprep'); // => 4

console.log(countRepeats('calvin'));
console.log(countRepeats('caaaalvin'));
console.log(countRepeats('pops'));
console.log(countRepeats('mississippi'));
console.log(countRepeats('hellobootcampprep'));
