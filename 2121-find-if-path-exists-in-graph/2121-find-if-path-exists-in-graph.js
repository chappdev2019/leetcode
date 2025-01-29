
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {

    if (edges.length == 0) return true;
    let map = new Map();
    for (let i = 0; i < edges.length; i++) {
        let [node, next] = edges[i];
        if (!map.has(node)) map.set(node, []);
        if (!map.has(next)) map.set(next, []);
        map.get(node).push(next);
        map.get(next).push(node);
    }
    let queue = [];
    let visited = new Set();
    queue.push(source);
    while(queue.length > 0) {
        let cur = queue.pop();
        for (const element of map.get(cur)) {
            if (element === destination) return true;
            if (!visited.has(element)) {
                visited.add(element);
                queue.push(element);
            }
        }
    }
    return false;
};