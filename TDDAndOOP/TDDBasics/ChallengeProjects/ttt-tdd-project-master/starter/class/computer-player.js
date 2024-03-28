
class ComputerPlayer {

  static getValidMoves(grid) {
    // Your code here
    let validMoves = [];
    for(let row = 0; row<grid.length; row++){
      for(let col = 0; col < grid.length; col++){
        if(grid[row][col] === ' '){
          validMoves.push({row, col})
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    // Your code here
   const validMoves = this.getValidMoves(grid);
   if(validMoves === 0){
    throw new Error("There are no more valid moves");
   }
   const randomIndex = Math.floor(Math.random() * validMoves.length);
   const randomMove = validMoves[randomIndex];

   return randomMove;
  }

  static getWinningMoves(grid, symbol) {
    // Your code here
    const winningMove=[];
    for(let row=0; row<grid.length; row++){
      for(let col=0; col<grid.length; col++){
        if(grid[row][col] === ' '){
          grid[row][col]===symbol;

          if(this.ttt.checkWin(grid)){
            winningMove.push({row, col});
          }
          grid[row][col] = ' ';
        }
      }
    }
    return winningMove;
  }

  static getSmartMove(grid, symbol) {
    // Your code here

  }

}

module.exports = ComputerPlayer;
