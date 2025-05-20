function stretch() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done stretching"), 1000);
  });
}

function runOnTreadmill() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done running on treadmill"), 500);
  });
}

function liftWeights() {
  // Your code here
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("done lifting weights"), 2000);
  });
}

function workout() {
  // Your code here
  stretch()
    .then((result) => {
      console.log(result);
      return runOnTreadmill();
    })
    .then((result2) => {
      console.log(result2);
      return liftWeights();
    })
    .then((result3) => {
      console.log(result3);
      console.log("done working out");
    });
}


/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out