// Your code here
class PartyPlanner{
	constructor(guessList = []){
		this.guestList = guessList;
	}

	addToGuestList(name){
		this.guestList.push(name);
	}

	throwParty(){
		if (this.guestList.length === 0){
			return `Gotta add people to the guest list`;
		}
		else{
			const guest = this.guestList.join(" and ");
			return `Welcome to the party ${guest}`;
		}
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
