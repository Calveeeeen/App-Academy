function adults(people){
    let over18 = people.filter(person => person.age > 17);
    // code below is just to see who was filtered into the variable
    // for(let i=0; i < over18.length; i++){
    //     let person = over18[i];
    //     console.log(person.name);
    // }
    return over18;
}

const ppl= [
    {name: 'John', age: 20},
    {name: 'Jim', age: 13},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
];

// adults(ppl); // => [ 'John', 'Jane' ]

console.log(adults(ppl));
