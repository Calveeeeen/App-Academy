/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
// function reverse(str){
//   let letters = str.split("")
//   let letter = letters[1];
//   let newStr = [];
//   if(str.length = ""){
//     return "";
//   }
//   if(str.length > 0){
//     console.log(letters);
//     console.log(newStr);
//     newStr.unshift(str.slice(0,1))
//     return reverse(str.slice(1));
//   }
//   if (str.length = 0){
//     return newStr.join("");
//   }
// }

function reverse(str, revArr=[]){
  if(str.length == 0){
    return revArr.join("");

  }
  else{
    let letter = str[0];
    revArr.unshift(letter);

    return reverse(str.slice(1), revArr);
  }


}

console.log(reverse("house"));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
