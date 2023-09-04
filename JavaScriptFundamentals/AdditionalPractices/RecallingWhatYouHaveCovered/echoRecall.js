/* Write a function echo that takes in a string and console.logs that string "echo-ized". */

function echo(string) {
    // your code here...
    let yell = string.toUpperCase();
    let whisper = string.toLowerCase();

    let newString = yell + "..." + string + "..." + whisper;
    console.log(newString);
  }

  echo("Mom!"); // => prints "MOM! ... Mom! ... mom!"
  echo("hey"); // => prints "HEY ... hey ... hey"
  echo("JUMp"); // => prints "JUMP ... JUMp ... jump"
