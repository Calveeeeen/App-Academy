// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    // Your code here
    this.currentID += 1;
    let ID = this.currentID;

    let user = {
      id: ID,
      name: name
    };

    this.users[ID] = user;

    this.follows[ID] = new Set();

    return ID;
  }

  getUser(userID) {
    // Your code here
    if(this.users.hasOwnProperty(userID)){
      return this.users[userID];
    }
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    let followed = false;
    if(this.users.hasOwnProperty(userID1) && this.users.hasOwnProperty(userID2) && userID1 !== userID2){
      this.follows[userID1].add(userID2);
      followed = true;
      return followed;
    }
    else{
      return followed;
    }

  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  getFollowers(userID) {
    // Your code here
    let followers = [];
    while(this.users[this.ID]){
      if(userID === this.follows[this.ID]){
        followers.push(this.ID);
      }
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here
  }
}

module.exports = SocialNetwork;
