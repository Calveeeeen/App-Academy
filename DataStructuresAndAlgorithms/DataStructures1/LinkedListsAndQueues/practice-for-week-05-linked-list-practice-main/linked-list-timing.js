const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here

const linkedList = new LinkedList();
const doublyLinkedList = new DoublyLinkedList();

let sizes = [10, 100, 1000]


function generateSize(size){
    let startTime = Date.now();
    new Array(size).fill(0)
    let endTime = Date.now();
    let elapsed = endTime - startTime;
    console.log(elapsed);
}


for(let size of sizes){
    linkedList.addToHead(generateSize(size));
}


// linkedList.addToHead(15);
// linkedList.addToHead(22);
// console.log(linkedList);
