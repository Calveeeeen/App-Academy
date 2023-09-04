/* Write a function, countVowels(word), that takes in a string word and
returns the number of vowels in the word. Vowels are the letters
"a", "e", "i", "o", "u". */

function countVowels(word){
    // initialize counter and indice counter
    let lowerWord=word.toLowerCase();
    let i=0;
    let counter=0;
    // iterate through the word.
    for (i=0;i<lowerWord.length;i++){
      // let arr=[];
      // arr.push(word.charAt(i));

      if (lowerWord.charAt(i)==='o'){
        counter+=1;
      }
      else if(lowerWord.charAt(i)==='a'){
        counter+=1;
      }
      else if(lowerWord.charAt(i)==='e'){
        counter+=1;
      }
      else if(lowerWord.charAt(i)==='i'){
        counter+=1;
      }
      else if(lowerWord.charAt(i)==='u'){
        counter+=1;
      }
      else{

      }
    }
    return counter;
}

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2
