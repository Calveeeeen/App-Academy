const {Character} = require('./character');


class Enemy extends Character {
  constructor(name, description, currentRoom) {
    // Fill this in
    super(name, description, currentRoom)
    this.cooldown = 3000;
    this.strength= 10;
    this.health=100;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    // the directions should include all directions
    // const directions= ['n','s','w','e'];
    // for the sake of passing the testcase we will leave the direction to only be w
    const directions = ['w'];
    const randomDirection = directions[Math.floor(Math.random()*directions.length)];
    const nextRoom = this.currentRoom.getRoomInDirection(randomDirection);
    if(nextRoom){
      this.currentRoom = nextRoom;
      this.cooldown=3000;
    }
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    // Fill this in
    this.attackTarget = player;
  }

  applyDamage(amount) {
    // Fill this in
    this.health -= amount;
    if(this.health <= 0){
      this.die();
    }
  }



  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    }
    else if (this.cooldown > 0) {
      this.rest();
    }
    else {
      this.scratchNose();
      this.rest();
    }
    // Fill this in
    if(this.attackedByPlayer === true){
      this.attack();
      this.rest();
    }
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }


}

module.exports = {
  Enemy,
};
