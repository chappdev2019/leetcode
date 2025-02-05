/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
    let m = mat.length, n = mat[0].length;
    let queue = [];
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]]; 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]); 
            } else {
                mat[i][j] = -1; 
            }
        }
    }
    while (queue.length) {
        let [x, y] = queue.shift(); 
        for (let [dx, dy] of directions) {
            let nx = x + dx, ny = y + dy;
            if (nx < 0 || ny < 0 || nx >= m || ny >= n || mat[nx][ny] != -1) continue;
            mat[nx][ny] = mat[x][y] + 1; 
            queue.push([nx, ny]); 
        }

    }
    return mat;
};
