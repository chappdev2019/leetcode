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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
    if (root == null) return Infinity;
    if (root.val == target) return root.val;
    let cur = 0;
    if (root.val > target) {
        cur = closestValue(root.left, target);
    } else if (root.val < target) {
        cur = closestValue(root.right, target);
    }
    if (Math.abs(root.val - target) < Math.abs(cur - target) ||
        (Math.abs(root.val - target) === Math.abs(cur - target) && root.val < cur)) {
        return root.val;
    } else {
        return cur;
    }
};