function reverseHyphenString(str){
    let strArr = str.split("-");
    let newArr = [];
    for(i=strArr.length-1; i>=0; i--){
        let el = strArr[i];
        newArr.push(el);
    }
    return newArr.join("-");
}

// reverseHyphenString("Go-to-the-store") // => "store-the-to-Go"
// reverseHyphenString("Jump,-jump-for-joy") // => "joy-for-jump-Jump,"

console.log(reverseHyphenString("Go-to-the-store"));
console.log(reverseHyphenString("Jump,-jump-for-joy") );
