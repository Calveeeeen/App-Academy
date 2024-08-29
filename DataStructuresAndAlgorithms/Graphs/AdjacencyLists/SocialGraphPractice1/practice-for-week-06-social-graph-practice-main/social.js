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
    if (this.users.hasOwnProperty(userID)) {
      return this.users[userID];
    }
    return null;
  }

  follow(userID1, userID2) {
    // Your code here
    let followed = false;
    if (this.users.hasOwnProperty(userID1) && this.users.hasOwnProperty(userID2) && userID1 !== userID2) {
      this.follows[userID1].add(userID2);
      followed = true;
      return followed;
    }
    else {
      return followed;
    }

  }

  getFollows(userID) {
    // Your code here
    return this.follows[userID];
  }

  // this needs to be fixed. doesn't work
  getFollowers(userID) {
    // Your code here
    if (!this.users[userID]) {
      return null;  // If the user does not exist, return null or an empty list
    }

    const followers = new Set();

    // Iterate over all users and check if they follow the given userID
    for (let id in this.follows) {
      if (this.follows[id].has(userID)) {
        followers.add(parseInt(id));  // Add the follower's user object to the list
      }
    }

    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    // Your code here

    // get list of og users follows
    let alreadyFollows = this.follows[userID] || new Set();;
    let recommended = new Set();
    let visited = new Set();

    if (!this.users[userID]) {
      return null;
    }
    let recommendedHelper = (currID, remainingDegrees) => {
      if (remainingDegrees === 0) {
        return;
      }
      visited.add(currID);

      for (let followedID of this.follows[currID] || []) {
        if (!alreadyFollows.has(followedID) && !visited.has(followedID)) {
          recommended.add(followedID)
        }
        if(!visited.has(followedID)){
          recommendedHelper(followedID, remainingDegrees - 1);
        }

      }
    }

    recommendedHelper(parseInt(userID), degrees+1)

    return Array.from(recommended);
  }
}

module.exports = SocialNetwork;
