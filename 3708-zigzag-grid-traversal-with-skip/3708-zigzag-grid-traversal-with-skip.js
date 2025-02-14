/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    let res = [];
    let len = grid[0].length;
    let start = len % 2==0 ? len-1 : len-2;
    for (let i = 0; i < grid.length; i++) {
        if(i % 2 == 0) {
            for (let j = 0; j < len; j+=2) {
                res.push(grid[i][j]);
            }
        } else {
            for (let j = start; j >= 0; j-=2) {
                res.push(grid[i][j]);
            }
        }
    }
    return res;
};