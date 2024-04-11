class DynamicArray {

  constructor(defaultSize=4) {
    this.defaultSize = defaultSize;
    // Your code here
    this.data = new Array(defaultSize);
    this.capacity = defaultSize;
    this.length = 0;
  }

  read(index) {
    // Your code here
    // console.log(this.data);
    return this.data[index];
  }

  unshift(val) {
    // Your code here
    // Shift elements to the right to make space for the new value
    for(let i=this.length; i>0; i--){
      this.data[i] = this.data[i-1];
    }
    this.data[0] = val;
    this.length++;
  }

}


module.exports = DynamicArray;
