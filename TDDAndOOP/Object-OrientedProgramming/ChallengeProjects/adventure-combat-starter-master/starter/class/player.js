const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, description, startingRoom, items=[]) {
    super(name, description="main character");
    this.currentRoom = startingRoom;
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
        const item = this.currentRoom.items.splice(itemIndex, 1)[0];
        this.items.push(item);
        return item;
    }
    return null;
  }

  dropItem(itemName) {
    // Fill this in
    console.log(currentRoom.items.length);
    console.log(itemName);
    // const itemIndex = this.items.findIndex(item => item.name === itemName);
    // if (itemIndex !== -1) {
    //     const item = this.items.splice(itemIndex, 1)[0];
    //     this.currentRoom.items.push(item);
    //     return item;
    // }
    // return null;
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
    this.attackTarget =name;
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
