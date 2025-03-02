/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {

    let dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [-1, -1], [1, 1], [1, -1], [-1, 1]];
    const calNeighborCount = (i, j) => {
        let count = 0;
        for (const [r, c] of dirs) {
            let newR = i + r;
            let newC = j + c;
            if (newR < 0 || newC < 0 || newR >= board.length || newC >= board[0].length) continue;
            if (board[newR][newC] === 1 || board[newR][newC] === -1) count++;
        }
        return count;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            let liveNeighbors = calNeighborCount(i, j);
            if (board[i][j] == 1) {
                if (liveNeighbors == 2 || liveNeighbors == 3) continue;
                board[i][j] = -1;
            } else {
                if (liveNeighbors == 3) board[i][j] = 2;
            }
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === -1) board[i][j] = 0; 
            if (board[i][j] === 2) board[i][j] = 1; 
        }
    }
};