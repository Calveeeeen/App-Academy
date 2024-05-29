function shortestWord(sent){
    let words = sent.split(" ");
    let shortest = words[0];
    for(let i=0; i<words.length; i++){
        let word = words[i];
        if(word.length < shortest.length){
            shortest = word;
        }
    }
    return shortest;
}

// shortestWord('app academy is cool') // => 'is'
// shortestWord('programming bootcamp') // => 'bootcamp'

console.log(shortestWord('app academy is cool'));
console.log(shortestWord('programming bootcamp'));
