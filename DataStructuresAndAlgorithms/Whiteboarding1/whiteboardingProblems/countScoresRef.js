function countScores(people) {
    let scores = {};
    for (let i = 0; i < people.length; i++) {
        let person = people[i];
        let key = person.name;
        if (scores[key]) {
            scores[key] += person.score;
        } else {
            scores[key] = person.score;
        }
    }
    return scores;
}

// Example 1:
const ppl = [
    { name: "Anthony", score: 10 },
    { name: "Fred", score: 10 },
    { name: "Anthony", score: -8 },
    { name: "Winnie", score: 12 }
];
// countScores(ppl); // => { Anthony: 2, Fred: 10, Winnie: 12 }

// Example 2
const peeps = [
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Winnie", score: 2 },
    { name: "Fred", score: 2 },
    { name: "Anthony", score: 2 },
    { name: "Winnie", score: 2 }
];

// countScores(peeps); // => { Anthony: 4, Fred: 4, Winnie: 6 }

console.log(countScores(ppl));
console.log(countScores(peeps));
