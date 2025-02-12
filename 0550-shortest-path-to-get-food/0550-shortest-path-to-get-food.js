/**
 * @param {character[][]} grid
 * @return {number}
 */
var getFood = function (grid) {
    let queue = new Queue()//[];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == "*") {
                // grid[i][j] = 'X'
                queue.enqueue([i, j, 0]);
                break
            }
        }
    }
    const dirs = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    let res = Infinity;
    while (queue.size() > 0) {
        let [x, y, z] = queue.dequeue();//
        if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] == 'X') continue;
        if (grid[x][y] == '#') {
            return z;
        }
        grid[x][y] = 'X';

        for (let [a, b] of dirs) {
            queue.enqueue([x + a, y + b, z+1]);
        }
    }
    return res == Infinity ? -1 : res;
};