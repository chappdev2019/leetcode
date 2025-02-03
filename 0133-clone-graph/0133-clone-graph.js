/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (node == null) return null;
    let map = new Map();
    return dfs(node);

    function dfs(node) {
        if (map.has(node)) return map.get(node); 
        let head = new Node(node.val);
        map.set(node, head); 
        for (let i = 0; i < node.neighbors.length; i++) {
            head.neighbors.push(dfs(node.neighbors[i]))
        }
        return head;
    }
};