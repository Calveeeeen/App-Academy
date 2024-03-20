const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand("w", "move cursor up", () => this.cursor.up());
    Screen.addCommand("s", "move cursor down", () => this.cursor.down());
    Screen.addCommand("a", "move cursor left", () => this.cursor.left());
    Screen.addCommand("d", "move cursor right", () => this.cursor.right());
    Screen.addCommand("m", "place the move", () => this.placeMove())
    Screen.addCommand('t', 'test command (remove)', ConnectFour.testCommand);

    this.cursor.setBackgroundColor();
    Screen.render();
  }

  // Remove this
  placeMove() {
    const row = this.cursor.row;
    const col = this.cursor.col;
    if (this.grid[row][col] === ' ') {
      this.grid[row][col] = this.playerTurn;
      this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O'; // Switch player turn
      this.renderGrid(); // Update the screen with the new move
      const winner = ConnectFour.checkWin(this.grid); // Check if the game has ended after the move
      if (winner) {
        ConnectFour.endGame(winner); // End the game if there is a winner
      }
    } else {
      Screen.setMessage("Position already occupied.");
    }
  }

  renderGrid() {
    console.clear();
    for (let row = 0; row < 6; row++) {
        let rowStr = ' ';
        for (let col = 0; col < 7; col++) {
            rowStr += this.grid[row][col];
            if (col < 7) {
                rowStr += ' | ';
            }
        }
        console.log(rowStr);
        if (row < 5) {
            console.log('-------------------------------');
        }
    }
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    // check for vertical wins
    for(let col=0; col<7; col++){
      for(let row=0; row+3<6; row++){
        let point1=grid[row][col];
        let point2=grid[row+1][col];
        let point3= grid[row+2][col];
        let point4=grid[row+3][col];
        if(point1 === point2 && point2 === point3 && point3 === point4 && point1 !== ' '){
          return grid[row][col];
        }
      }
    }

    //check for horizontal wins
    for(let row=0; row<6; row++){
      for(let col=0; col+3<7; col++){
        let point1 = grid[row][col];
        let point2 = grid[row][col+1];
        let point3 = grid[row][col+2];
        let point4 = grid[row][col+3];
        if(point1 === point2 && point2 === point3 && point3 === point4 && point1 !== ' '){
          return grid[row][col];
        }
      }
    }
    // check for diagonal wins (specify every possible diagonal 4 in a row)
    // top left to bottom right
    for(let j=0; j+3 < 6 ; j++){
      for(let i=0; i+3 < 7; i++){
        if(grid[j][i] === grid[j+1][i+1] && grid[j+1][i+1] === grid[j+2][i+2] && grid[j+2][i+2] === grid[j+3][i+3] && grid[j][i] !== ' '){
          return grid[j][i];
        }
      }
    }
    //top right to bottom left
    for(let j=0; j+3<6; j++){
      for(let i=6; i-3 >=0; i--){
        let point1 = grid[j][i];
        let point2 = grid[j+1][i-1];
        let point3 = grid[j+2][i-2];
        let point4 = grid[j+3][i-3];
        if(point1 === point2 && point2 === point3 && point3 === point4 && grid[j][i] !== " "){
          return grid[j][i];
        }
      }
    }

    // check if it's a tie
    let isTie = true;
    for(let j=0; j<6; j++){
      for(let i=0; i<7; i++){
        if(grid[j][i] === ' '){
          isTie=false;
          break;
        }
      }
    }
    if(isTie === true){
      return "T";
    }

    // check for empty grid
    let emptyGrid = true; // Grid is empty if all cells are empty
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
          if (grid[row][col] !== ' ') {
              return emptyGrid = false; // Grid is not empty if any cell is not empty
          }
      }
  }
  if(emptyGrid === true){
    return false;
  }
}

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = ConnectFour;
