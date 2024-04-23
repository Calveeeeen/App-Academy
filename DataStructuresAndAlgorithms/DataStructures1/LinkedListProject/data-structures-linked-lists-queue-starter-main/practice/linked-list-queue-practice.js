// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;

    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let count = 0;
        while (this.head) {
            count++;
            this.head = this.head.next;
        }
        return count;
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        while (this.head) {
            sum += this.head.value;
            this.head = this.head.next;
        }
        return sum;
        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes
        let count = 0;
        let sum = 0;
        while (this.head) {
            count++;
            sum += this.head.value;
            this.head = this.head.next;
        }
        return sum / count;
        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let count = 0;
        while (count < n) {
            count++;
            this.head = this.head.next;
        }
        return this.head;
        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node

        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        if (!this.head) {
            return null; // Return null if the list is empty
        }

        let slowPtr = this.head;
        let fastPtr = this.head;

        // Move the fast pointer two steps ahead and the slow pointer one step ahead
        // When the fast pointer reaches the end of the list, the slow pointer will be at the middle
        while (fastPtr && fastPtr.next && fastPtr.next.next) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.next.next;
        }

        return slowPtr; // Return the middle node
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        let arr = [];
        // Returns a new reversed version of the linked list
        while (this.head) {
            let val = this.head.value;
            arr.push(val);
            this.head = this.head.next;
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            let val = arr[i];
            this.addToTail(val);
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
        // time complexity O(2n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;
        let next = null;

        // Traverse the list and reverse the pointers
        while (current !== null) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the pointer
            prev = current; // Move prev to the current node
            current = next; // Move current to the next node
        }

        // Update the head pointer to point to the last node (prev)
        this.head = prev;

        // Return the new head of the reversed list
        // Write your hypothesis on the time complexity of this method here
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        if (!this.head) {
            return null; // Return null if the list is empty
        }

        let slowPtr = this.head;
        let fastPtr = this.tail;

        while (slowPtr !== fastPtr && slowPtr.next !== fastPtr) {
            slowPtr = slowPtr.next;
            fastPtr = fastPtr.prev;
        }

        return slowPtr; // Return the middle node
        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list
        let arr = [];
        while (this.head) {
            let val = this.head.value;
            arr.push(val);
            this.head = this.head.next;
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            let val = arr[i];
            this.addToTail(val);
        }
        return this;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let prev = null;
        let current = this.head;
        let next = null;

        // Swap head and tail pointers
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // Traverse the list and reverse the pointers
        while (current !== null) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the pointer
            prev = current; // Move prev to the current node
            current = next; // Move current to the next node
        }
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
