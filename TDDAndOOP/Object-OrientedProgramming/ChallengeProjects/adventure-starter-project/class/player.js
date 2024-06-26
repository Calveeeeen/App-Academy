const { Food } = require("./food");

class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
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
        }
    }

    dropItem(itemName) {
        // Fill this in
        const itemIndex = this.items.findIndex(item => item.name === itemName);
        if(itemIndex !== -1) {
            const item = this.items.splice(itemIndex, 1)[0];
            return this.currentRoom.items.push(item);
        }
    }

    eatItem(itemName) {
        // Fill this in
       const itemIndex = this.items.findIndex(item => item.name === itemName && item instanceof Food);
       if(itemIndex != -1){
        const item = this.items.splice(itemIndex, 1)[0];
        console.log(`You have eaten a ${itemName}.`);
       }
       else{
        console.log(`You cannot eat a ${itemName}`);
       }
    }

    getItemByName(name) {
        // Fill this in
        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].name == name) {
                return this.items[i];
            }
        }
        return undefined;
    }
}

module.exports = {
  Player,
};
