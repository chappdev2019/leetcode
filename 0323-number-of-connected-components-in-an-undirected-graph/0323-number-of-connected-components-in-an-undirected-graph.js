/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function (n, edges) {
    let ref = new Map();
  for (let i = 0; i < n; i++) ref.set(i, []);

  for (const [a, b] of edges) {
    ref.get(a).push(b);
    ref.get(b).push(a);
  }

    let sortedByVal = new Map([...ref.entries()].sort((a, b) => b[1].length - a[1].length));
  let count = 0;
  const visited = new Array(n).fill(false);

  for (const [k,v] of sortedByVal) {
    if (visited[k]) continue;
    count++;
    const stack = [k];
    visited[k] = true;

    while (stack.length > 0) {
      const u = stack.pop();
      const neighbors = ref.get(u); 
      for (const node of neighbors) {
        if (!visited[node]) {
          visited[node] = true;
          stack.push(node);
        }
      }
    }
  }

  return count;
};