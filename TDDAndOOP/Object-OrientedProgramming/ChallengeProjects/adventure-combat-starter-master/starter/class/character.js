class Character {

  constructor(name, description, currentRoom) {
    // Fill this in
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.items = [];
    this.strength = 10;
    this.health = 100;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if(this.health <= 0){
     this.die();
    }
  }

  die() {
    // Fill this in
      for (let i=0; i<this.items.length; i++){
        let item = this.items[i];
        this.currentRoom.items.push(item);
      }
      this.items=[];
      this.currentRoom = null;
    }

}

module.exports = {
  Character,
};
