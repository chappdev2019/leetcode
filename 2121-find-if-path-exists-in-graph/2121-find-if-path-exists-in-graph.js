/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {

    if (!edges.length) return true;
    const map = new Map();
    for (let i = 0; i < edges.length; i++) {
        const [start, end] = edges[i];
        if (!map.has(start)) map.set(start, []);
        if (!map.has(end)) map.set(end, []);
        map.get(start).push(end);
        map.get(end).push(start);
    }
    let queue = [...map.get(source)]; 
    let visited = new Set();

    while (queue.length > 0) {
        let cur = queue.pop();
        if (cur == destination) return true;
        if (!visited.has(cur)) {
            visited.add(cur);
            let list = map.get(cur);
            queue.push(...list) 
        }
    }
    return false;
};