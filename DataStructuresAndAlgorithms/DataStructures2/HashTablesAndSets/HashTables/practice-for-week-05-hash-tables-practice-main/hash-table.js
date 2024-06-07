const sha256 = require('js-sha256');

class KeyValuePair {
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
	}
}

class HashTable {

	constructor(initialCapacity = 2, numBuckets = 4, data, count) {
		// Your code here
		this.numBuckets = numBuckets;
		this.capacity = initialCapacity;
		this.data = new Array(this.capacity).fill(null);
		this.count = 0;
	}

	hash(key) {
		// Your code here
		let code = sha256(key);
		let first8 = code.slice(0, 8);
		let flip = first8.split("").reverse().join("");
		// decimal vals for the given hexdecimal V
		let decCode = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }
		let dec = 0;
		// first8 is in hexidecimal -> need to convert first8 to decimal
		for (let i = 0; i < flip.length; i++) {
			let el = flip[i];
			let val = decCode[el];
			// formula for converting hex to decimal V
			dec += (val * (16 ** i));
		}
		// return the decimal val;
		return dec;
	}

	hashMod(key) {
		// Your code here
		let val = this.hash(key)
		console.log(val);
		let ind = val % this.capacity;
		console.log(ind);
		return ind;
	}

	insertNoCollisions(key, value) {
		// Your code here
		let index = this.hashMod(key);
		if(this.data[index] == null){
			this.data[index] = { key, value };
			this.count++;
		}
		else{
			throw new Error('hash collision or same key/value pair already exists!');
		}
	}

	insertWithHashCollisions(key, value) {
		// Your code here
		let index = this.hashMod(key);
		let newData = new KeyValuePair(key, value);
		if(this.data[index] == null){
			this.data[index] = newData;
		}
		else{
			newData.next = this.data[index];
			this.data[index] = newData
		}
		this.count++;
	}

	insert(key, value) {
		// Your code here
		let index = this.hashMod(key);
		let newData = new KeyValuePair(key, value);
		if(this.data[index] == null){
			this.data[index] = newData;
		}
		else{
			let current = this.data[index];

			while(current !== null){
				if(current.key == newData.key){
					current.value = value;
					return;
				}
				if(current.next==null){
					break;
				}
				current = current.next;
			}

			newData.next = this.data[index];
			this.data[index] = newData
		}

		this.count++;
	}

}


module.exports = HashTable;
