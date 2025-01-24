/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] < 0) {
                count += (grid[0].length - j);
                break;
            }
        }
    }
    return count;
};