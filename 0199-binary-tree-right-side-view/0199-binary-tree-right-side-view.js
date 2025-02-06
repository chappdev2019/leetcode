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
    
    let dfs=(node,level=0)=>{
        if(!node) return;
        res[level]=node.val;
        dfs(node.left,level+1)
        dfs(node.right,level+1);
    }
    dfs(root);
    return res;
};