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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    if (!root) return []; 
    let res = [];
    let list = [root];
    let flag = true;

    while (list.length > 0) {
        let size = list.length;
        let level = [];
        while (size > 0) {
            let cur = list.shift();
            level.push(cur.val);
            if (cur.left != null) {
                list.push(cur.left);
            }
            if (cur.right != null) {
                list.push(cur.right);
            }
            size--;
        }
        if (!flag) level.reverse();
        res.push(level);
        flag = !flag;
    }
    return res;
};