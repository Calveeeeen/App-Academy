const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


let secretNumber;

function randomInRange(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    let range = Math.floor(Math.random()*(max-min+1)+min);
    return range;
}

function askRange(){
    rl.question("Enter a number to be used as the lower number in your range: ", (answer)=>{
        let min = Number(answer);

        rl.question("Enter a number to be used for the max number in your range: ", (answer) =>{
            let max = Number(answer);
            console.log(`I'm thinking of a number between ${min} and ${max}...`);
            secretNumber = Number(randomInRange(min, max));
            console.log(secretNumber);
            askGuess(min, max);
        })
    })

}

function checkGuess(num){
    if(Number(num)>Number(secretNumber)){
        console.log("The number you entered is too high.");
        return false;
    }
    else if(Number(num) < Number(secretNumber)){
        console.log("The number you entered is too low.");
        return false;
    }
    else if (Number(num)===Number(secretNumber)){
        console.log("Correct!")
        return true;
    }
}

function askGuess(min, max){

    rl.question(`Enter a number between ${min} and ${max}: `, (answer) =>{
        let result = checkGuess(answer);
        if(result !== true){
            askGuess();
        }
        else if(result === true){
            console.log("You Win!!!");
            rl.close();
        }
    });
}

askRange();
