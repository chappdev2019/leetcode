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
 * @return {string}
 */
var tree2str = function(root) {
    return dfs(root)

    function dfs (root) {
        if (root == null) return '';
        let str = root.val +''; 
        if (root.left!=null || root.right!=null) {
            str += "(" + dfs(root.left) + ")";
        }
        if (root.right!=null) {
            str += "(" + dfs(root.right) + ")";
        }
        return str;
    }
};