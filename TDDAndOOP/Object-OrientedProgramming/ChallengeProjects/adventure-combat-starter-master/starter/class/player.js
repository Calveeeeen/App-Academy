const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, description, currentRoom, items=[]) {
    super(name, description="main character");
    this.currentRoom = currentRoom;
    this.items=items;
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    // Fill this in
    const itemIndex = this.currentRoom.items.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        // Remove the item from the room and add it to the player's items
        const item = this.currentRoom.items.splice(itemIndex, 1)[0];
        this.items.push(item);
        console.log(items);
        return item; // Return the item object
    }
    return null; // Return null if item not found
  }

  dropItem(itemName) {
    // Fill this in
    const itemIndex = this.items.findIndex(item => item.name === itemName);
    if(itemIndex !== -1){
      const item = this.items.splice(itemIndex, 1)[0];
      return this.currentRoom.push(item);
    }

  }

  eatItem(itemName) {
    // Fill this in
    const itemIndex = this.items.findIndex(item => item.name === itemName && item instanceof Food);
    if (itemIndex !== -1){
      const item = this.items.splice(itemIndex, 1)[0];
      console.log(`You have eaten a ${itemName}`);
    }
    else{
      console.log(`You cannot eat a ${itemName}`);
    }
  }

  getItemByName(name) {
    // Fill this in
    for(let i= 0; i<this.items.length; i++){
      if(this.items[i].name === name){
        return this.items[i];
      }
    }
  }

  hit(name) {
    // Fill this in

  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
