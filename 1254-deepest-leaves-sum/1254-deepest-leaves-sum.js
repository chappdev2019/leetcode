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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let maxDepth = 0;
    let res = 0;
    dfs(root, 0);
    return res;

    function dfs (root, level) {
        if (root == null) return;
        if (root.right == null && root.left == null) {
            if (level > maxDepth) {
                maxDepth = level;
                res = root.val;
            } else if (level == maxDepth) {
                res += root.val;
            } 
            return;
        }
        dfs(root.left, level + 1);
        dfs(root.right, level + 1);
    }
};