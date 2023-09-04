/* Write a function consonantCancel that takes in a sentence and returns a new sentence
where every word begins with it's first vowel. */

function consonantCancel(sentence) {
    let vowels = 'aeiou';
    let words = sentence.split(" ");
    let newSent = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let newWord = "";
        let vowelFound = false;

        for (let t = 0; t < word.length; t++) {
            let char = word[t];

            if (!vowelFound && vowels.includes(char)) {
                vowelFound = true;
            }

            if (vowelFound || vowels.includes(char)) {
                newWord += char;
            }
        }

        newSent.push(newWord);
    }

    return newSent.join(" ");
}

console.log(consonantCancel("down the rabbit hole")); // "own e abbit ole"
console.log(consonantCancel("writing code is challenging")); // "iting ode is allenging"
