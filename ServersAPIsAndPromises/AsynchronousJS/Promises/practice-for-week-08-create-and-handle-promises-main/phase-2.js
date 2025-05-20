function stretch(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft < 1000) {
        reject(new Error("Error:  you don't have enough time to stretch"));
      } else {
        resolve("done stretching");
      }
    }, 1000);
  });
}


function runOnTreadmill(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft < 500){
        reject(new Error("Error: you don't have enough time to run on treadmill"))
      }
      else{
        resolve("done running on treadmill");
      }
    }, 500);
  });
}


function liftWeights(timeLeft) {
  // refactor your code from phase 1
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeLeft <2000){
        reject(new Error("Error: you don't have enough time to lift weights"));
      }
      else{
        resolve("done lifting weights");
      }
    }, 2000);
  });
}


function workout(totalTime) {
  // refactor your code from phase 1
  // Your code here
  stretch(totalTime)
    .then((results) => {
      console.log(results);
      return runOnTreadmill(totalTime - 1000);
    })
    .then((results2) => {
      console.log(results2);
      return liftWeights(totalTime - 1500);
    })
    .then((results3) => {
      console.log(results3);
      console.log("done working out with " + ((totalTime - 3500)/1000) + " seconds left");
    })
    .catch(err => {
      console.log(err.message);
    });
}

/* ============================ TEST YOUR CODE ============================

Comment in each invocation of your workout function below and run the file
(node phase-2.js) to see if you get the expected output.
*/


// workout(500);
  // should print out the following:
    // Error:  you dont have enough time to stretch


// workout(1000);
  // should print out the following:
    // done stretching
    // Error:  you dont have enough time to run on treadmill


// workout(2000);
  // should print out the following:
    // done stretching
    // done running on treadmill
    // Error:  you dont have enough time to lift weights


// workout(4000);
  // should print out the following:
  //   done stretching
  //   done running on treadmill
  //   done lifting weights
  //   done working out with 0.5 seconds left