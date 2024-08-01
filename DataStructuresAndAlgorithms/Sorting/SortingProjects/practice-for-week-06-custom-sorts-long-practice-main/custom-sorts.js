function ageSort(users) {
  // Your code here
  users.sort((a,b) => {
    return a.age - b.age
  })

  return users;
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort((a,b) => {
    if(a%2 === 1 && b%2===0){
      return -1;
    }
    if(a%2===0 && b%2===1){
      return 1;
    }
    return a-b
  })

  return arr;
}

function validAnagrams(s, t) {
  // Your code here
  let letters1 = s.split("").sort().join("");
  let letters2 = t.split("").sort().join("");
  if(letters1 === letters2){
    return true;
  }
  return false;
}

function reverseBaseSort(arr) {
  // Your code here

  // i think there's an error in this test case. 
}

function frequencySort(arr) {
  // Your code here
  let arr1 = [];
  let obj = {};
  for(let i=0; i<arr.length; i++){
    let val = arr[i];

    if(val in obj){
      obj[val]++;
    }
    else{
      obj[val] = 1;
    }
  }

  let entries = Object.entries(obj);

  entries.sort((a,b) =>{
    if(a[1] !== b[1]){
      return a[1] - b[1]
    }
    return b[0] - a[0];

  });

  for(let x=0; x<entries.length; x++){
    let count = entries[x][1];
    let num = entries[x][0];

    for(let t=0; t<count; t++){
      arr1.push(Number(num));
    }
  }

  return arr1;
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
