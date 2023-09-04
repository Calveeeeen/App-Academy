/* Write a function hasThreeVowels that accepts a string as an argument. The function should
return a boolean indicating whether or not the string contains at least three different vowels. */

// Your code here
function hasThreeVowels(string){
    let vowels='aeiou';
    let newString = '';
    let vowelCounter=0;
    for (let i = 0; i<string.length; i++){
        let char1 = string[i];
        for (let x=i+1; x<string.length;x++){
            let char2 = string[x];
            for (let t=i+2;t<string.length;t++){
                let char3 = string[t];
                if ((vowels.includes(char1)&&char1!==(char2||char3))
                &&(vowels.includes(char2)&&char2!==(char1||char3))
                &&(vowels.includes(char3)&&(char3!==(char1||char2)))){
                    vowelCounter++
                }
                console.log(vowelCounter)
            }
        }

    }
    if (vowelCounter>2){
        return true;
    }
    else{
        return false;
    }
}

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false
