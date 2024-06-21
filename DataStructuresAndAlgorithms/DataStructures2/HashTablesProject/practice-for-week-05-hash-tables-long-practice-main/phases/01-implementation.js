class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(capacity = 2, numBuckets = 8, count =0, data) {
    // Initialize your buckets here
    // Your code here
    this.numBuckets = numBuckets;
    this.capacity = capacity;
    this.count = count;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    if(this.count/this.capacity >= 0.7){
      this.resize();
    }
    let index = this.hashMod(key);
    let newData = new KeyValuePair(key, value);

    if(this.data[index]== null){
      this.data[index] = newData;
    }

    else{

      let pos = this.data[index];

      while(pos !== null){

        if(pos.key == newData.key){
          pos.value = value;
          return;
        }

        if(pos.next == null){
          break;
        }

        pos = pos.next;
      }

      newData.next = this.data[index];
      this.data[index] = newData;
    }
    this.count++;
  }


  read(key) {
    // Your code here
    let index = this.hashMod(key);
    let current = this.data[index];
    while(current){
      if(current.key === key){
        return current.value;
      }
      current = current.next;
    }
    return undefined;
  }


  resize() {
    // Your code here
    let oldData = this.data;
    this.capacity*=2;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;

    for(let bucket of oldData){
      let current = bucket;
      while(current){
        this.insert(current.key, current.value);
        current = current.next;
      }
    }
  }


  delete(key) {
    let index = this.hashMod(key);
    let pos = this.data[index];
    let prev = null;

    while(pos !== null){

      if(pos.key === key){
        if(prev === null){
          this.data[index] = pos.next;
        }
        else{
          prev.next = pos.next;
        }

        this.count--;
        return;
      }

      prev = pos;
      pos = pos.next;
    }

    return "Key not found";
  }
}


module.exports = HashTable;
