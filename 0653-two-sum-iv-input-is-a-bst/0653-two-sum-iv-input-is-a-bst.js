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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let set = new Set();
    return dfs(root);
    function dfs(root) {
        //base case
        if (root == null) return false;
        if(set.has(root.val)) return true;
        set.add(k - root.val);
        return dfs(root.left) || dfs(root.right);
    }
};