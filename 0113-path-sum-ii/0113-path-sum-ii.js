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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let res = [];
    function dfs (node, currentSum, path) {
        if (node === null) return;
        path.push(node.val);
        currentSum += node.val;
        if (node.right === null && node.left === null) {
            if (currentSum === targetSum) {
                res.push([...path]);
            } 
        }
        dfs(node.left, currentSum, path);
        dfs(node.right, currentSum, path);
        path.pop();

    }
    dfs(root, 0, []);
    return res;
};