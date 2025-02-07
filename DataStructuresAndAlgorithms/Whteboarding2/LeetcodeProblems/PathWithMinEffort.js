// https://leetcode.com/problems/path-with-minimum-effort/description/

// 1631. Path With Minimum Effort

// You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where
// heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you
// hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or
// right, and you wish to find a route that requires the minimum effort.

// A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

// Return the minimum effort required to travel from the top-left cell to the bottom-right cell.


/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    // height's is a 2-D array (matrix)
    let start = heights[0][0];
    let startPos = [0][0]
    let row = heights.length-1;
    let col =  heights[0].length-1;
    let goal = heights[row][col];
    let goalPos = [row][col];
    let min, nextStep;
    // effort is calculated by largest difference in value
    // directions of travel up, down, left, right always travel in the direction where the val of next position is
    // less than the rest
    let queue = [];
    let visited = new Set();

    queue.push(startPos);
    visited.add(`${0},${0}`);

    while(queue.length > 0){
        let [currRow, currCol] = queue.shift();
        let directions =[[1,0], [-1,0], [0,1], [0,-1]];

        for (let [rowDir, colDir] of directions){
            let newRow = currRow + rowDir;
            let newCol = currCol + colDir;
            let currPos = heights[currRow][currCol];
            let newPos = heights[newRow][newCol];
            if(heights[currRow, currCol] <= heights[newRow][newCol]){
                min =Math.abs(currPos - newPos)
                nextStep = `${newRow},${newCol}`
            }
            if(newRow >0 && newRow < row && newCol > 0 && newCol < col && !visited.has(`${newRow}, ${newCol}`)){
                
            }
        }
    }
    // keep visited to keep track of positions traveled already so you're not going backwards.
};
