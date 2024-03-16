const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {
    this.playerTurn = "O";

    this.grid = [[' ', ' ', ' '],
                 [' ', ' ', ' '],
                 [' ', ' ', ' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('w', "move the cursor up", () => this.cursor.up());
    Screen.addCommand('s', 'move the cursor down', () => this.cursor.down());
    Screen.addCommand('a', 'move the cursor to the left', () => this.cursor.left());
    Screen.addCommand('d', 'move the cursor to the right', () => this.cursor.right());

    // Define command to place move at cursor position
    Screen.addCommand('m', 'place move at cursor position', () => this.placeMove());

    Screen.render();
  }

  placeMove() {
    const row = this.cursor.row;
    const col = this.cursor.col;
    if (this.grid[row][col] === ' ') {
      this.grid[row][col] = this.playerTurn;
      this.playerTurn = this.playerTurn === 'O' ? 'X' : 'O'; // Switch player turn
      this.renderGrid(); // Update the screen with the new move
      const winner = TTT.checkWin(this.grid); // Check if the game has ended after the move
      if (winner) {
        TTT.endGame(winner); // End the game if there is a winner
      }
    } else {
      Screen.setMessage("Position already occupied.");
    }
  }

  renderGrid() {
    console.clear();
    for (let row = 0; row < 3; row++) {
        let rowStr = '';
        for (let col = 0; col < 3; col++) {
            rowStr += this.grid[row][col];
            if (col < 2) {
                rowStr += ' | ';
            }
        }
        console.log(rowStr);
        if (row < 2) {
            console.log('---------');
        }
    }
  }



  static checkWin(grid) {
    // Return 'X' else if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

    // check for horizontal wins
    for (let row = 0; row < 3; row++) {
      if (grid[row][0] === grid[row][1] && grid[row][1] === grid[row][2] && grid[row][0] !==' ') {
          return grid[row][0]; // Return the symbol of the winner
      }
    }

    // check or vertical wins
    for(let col = 0; col < 3; col++){
      if(grid[0][col] === grid[1][col] && grid[1][col]===grid[2][col] && grid[0][col] !== ' '){
        return grid[0][col];
      }
    }

    // check for diagonal wins

    if(grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2] && grid[0][0] !== ' '){
      return grid[0][0];
    }
    if(grid[0][2]===grid[1][1] && grid[1][1] === grid[2][0] & grid[2][0] !== ' '){
     return grid[0][2]
    }

    let isTie = true;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 3; col++) {
            if (grid[row][col] === ' ') {
                isTie = false;
                break;
            }
        }
    }
    if (isTie) {
        return 'T'; // Return 'tie' if no winner and no empty spaces
    }
    return false; // Return false if no winner and empty spaces;
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

module.exports = TTT;
