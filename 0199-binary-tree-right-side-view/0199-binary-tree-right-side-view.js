/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
    let res = [];
    if (root == null) return res;
    let queue = new Queue();
    queue.enqueue(root);
    while (queue.size() > 0) {
        let size = queue.size();
        let cur = queue.dequeue();
        size--;
        res.push(cur.val);
        if (cur?.right != null) queue.enqueue(cur.right);
        if (cur?.left != null) queue.enqueue(cur.left);
        while (size > 0) {
            let c = queue.dequeue();
            size--;
            if (c?.right != null) queue.enqueue(c.right);
            if (c?.left != null) queue.enqueue(c.left);
        }
    }
    return res;
};