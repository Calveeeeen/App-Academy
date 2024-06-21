function anagrams(str1, str2) {
  // Your code here
  let obj = {};

  if (str1.length == str2.length) {
    let letters1 = str1.split("");
    let letters2 = str2.split("");

    for (let i = 0; i < letters1.length; i++) {
      let key1 = letters1[i]
      let key2 = letters2[i];
      if (key1 in obj) {
        obj[key1]++;
      }
      else {
        obj[key1] = 1;
      }
      if (key2 in obj) {
        obj[key2]++;
      }
      else {
        obj[key2] = 1;
      }
    }

    for (key in obj) {
      if (obj[key] % 2 == 1) {
        return false;
      }
    }
    return true;
  }
  else {
    return false;
  }
}


function commonElements(arr1, arr2) {
  // Your code here
  let obj = {};
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    let el1 = arr1[i];

    if (el1 in obj) {
      obj[el1]++;
    }
    else {
      obj[el1] = 1;
    }
  }

  for (let t = 0; t < arr2.length; t++) {
    let el2 = arr2[t];

    if (el2 in obj) {
      obj[el2]++;
    }
    else {
      obj[el2] = 1;
    }
  }

  for (let el in obj) {
    if (obj[el] > 1) {
      newArr.push(Number(el));
    }
  }
  return newArr;
}


function duplicate(arr) {
  // Your code here
  let obj = {};
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (key in obj) {
      obj[key]++;
    }
    else {
      obj[key] = 1;
    }
  }
  for (key in obj) {
    if (obj[key] == 2) {
      return Number(key);
    }
  }
}


function twoSum(nums, target) {
  // Your code here
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let key = target - num;

    if (key in obj) {
      return true;
    }
    obj[num] = true;
  }
  return false;
}


function wordPattern(pattern, strings) {
  // Your code here
  if (strings.length !== pattern.length) {
    return false;
  }

  let charToStr = {};
  let strToChar = {};

  for (let i = 0; i < strings.length; i++) {
    let word = strings[i];
    let char = pattern[i];

    if (charToStr[char] !== undefined) {
      if (charToStr[char] !== word) {
        return false;
      }
    }
    else {
      charToStr[char] = word;
    }

    if (strToChar[word] !== undefined) {
      if (strToChar[word] !== char) {
        return false;
      }
    }
    else {
      strToChar[word] = char;
    }
  }
  return true;
}




module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
