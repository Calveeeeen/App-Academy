// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        let newNode = new SinglyLinkedNode(val, this.head);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        }
        else{
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = newNode;
        }
        this.length++;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(!this.head){
            return undefined;
        }
        else{
            let oldHead = this.head;
            this.head = this.head.next;
            this.length--;
            return oldHead;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail
        let current = this.head;
        if(!this.head){
            this.length--;
            return undefined;
        }
        if (this.head.next === null) {
            this.head = null;
            this.length--;
            return;
        }

        while(current.next.next){
            current = current.next;
        }
        let removed = current.next;
        current.next = null;
        this.length--;

        return removed;
        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
            if(!this.head){
                return undefined;
            }
            else{
                return this.head.value;
            }
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if(!this.head){
            return undefined;
        }
        else{
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
