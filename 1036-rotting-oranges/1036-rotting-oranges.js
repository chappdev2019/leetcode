/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let pos = [[0,1], [0,-1], [1,0], [-1,0]];
  let freshcount = 0;
  let time = 0;

  const q = []; 
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) freshcount++;
      else if (grid[i][j] === 2) q.push([i, j]);
    }
  }

  while (q.length && freshcount > 0) {
    const size = q.length;  
    for (let s = 0; s < size; s++) {
      const [i, j] = q.shift(); 

      for (let po of pos) {
        let [di, dj] = po;
        const ni = i + di, nj = j + dj;

        if (ni < 0 || ni >= grid.length || nj < 0 || nj >= grid[0].length) continue;

        if (grid[ni][nj] === 1) {
          grid[ni][nj] = 2;
          freshcount--;
          q.push([ni, nj]);
        }
      }
    }
    time++; 
  }

  return freshcount > 0 ? -1 : time;
};
