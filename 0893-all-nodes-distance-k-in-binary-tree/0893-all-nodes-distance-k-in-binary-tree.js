/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if (!root) return [];

    let map = new Map(); 
    let parentMap = new Map(); 
    let queue = [];
    
    queue.push(root);
    map.set(root.val, 0);
    parentMap.set(root, null);

    while (queue.length > 0) {
        let cur = queue.pop();
        let level = map.get(cur.val);

        if (cur.left) {
            queue.push(cur.left);
            map.set(cur.left.val, level + 1);
            parentMap.set(cur.left, cur);
        }

        if (cur.right) {
            queue.push(cur.right);
            map.set(cur.right.val, level + 1);
            parentMap.set(cur.right, cur);
        }
    }

    let res = [];
    let visited = new Set();
    queue = [[target, 0]];
    visited.add(target);

    while (queue.length > 0) {
        let [cur, distance] = queue.shift();

        if (distance === k) {
            res.push(cur.val);
            continue;
        }
    
        for (let neighbor of [cur.left, cur.right, parentMap.get(cur)]) {
            if (neighbor && !visited.has(neighbor)) {
                queue.push([neighbor, distance + 1]);
                visited.add(neighbor);
            }
        }
    }

    return res;
};
