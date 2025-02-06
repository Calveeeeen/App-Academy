// 200. Number of Islands
// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number
// of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may
// assume all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;

    // traverse the grid (bfs). keep a quee for neighboring nodes. keep a set for the position of visited nodes
    let visited = new Set();
    let rows = grid.length;
    let cols = grid[0].length;

    function bfs(row, col){
        let queue = [];
        visited.add(`${row},${col}`);
        queue.push([row, col]);

        while(queue.length > 0){
            let [cr, cc] = queue.shift();
            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

            for (let [dr, dc] of directions){
                let nr = cr+dr;
                let nc = cc+dc;

                // check if the neighboring node is valid and if it is valid, is the value equal to 1, check if neighbor
                // has been visited
                if(nr>=0 && nr <rows && nc>=0 && nc <cols && grid[nr][nc] === "1" && !visited.has(`${nr},${nc}`)){
                    // if it is, add the position into the queue and to the visited set
                    queue.push([nr, nc]);
                    visited.add(`${nr},${nc}`);
                }
            }
        }
    };
    // traverse through the matrix
    // let i = row and j = column
    for (let i= 0; i< rows; i++){
        for(let j=0; j<cols; j++){
            // check if the value at said position is equal to 1, if it is check if it has been visited
            // if it hasn't been visited, increase the island count and call the search again on the start of a new island
            if(grid[i][j] === "1" && !visited.has(`${i},${j}`)){
                islandCount+=1;
                bfs(i,j)
            }
        }
    }
    // return the island count
    return islandCount;
};


// Input:
// grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]
// Output: 1


// Input:
// grid = [
//     ["1","1","0","0","0"],
//     ["1","1","0","0","0"],
//     ["0","0","1","0","0"],
//     ["0","0","0","1","1"]
//   ]
// Output: 3

// console.log(numIslands(grid));
