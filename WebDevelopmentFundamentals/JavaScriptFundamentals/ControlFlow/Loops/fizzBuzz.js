/* Define a function fizzBuzz(max) that takes a number and prints
every number from 0 to max (not inclusive) that is divisible by
either 3 or 5, but not both. */

function fizzBuzz(max){
    // for loop approach
    for (let index=0;index<max;index+=1){
        if(index===0){

        }
        else if ((index%3===0 && index%5!==0) || (index%3!==0 && index%5===0)){
            console.log(index);
        }
        else{

        }
    }

    // while loop approach
}

fizzBuzz(20);
