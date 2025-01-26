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
 * @return {TreeNode}
 
 */
var subtreeWithAllDeepest = function(root) {
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    if(left === right) return root;
    if(left>right) return subtreeWithAllDeepest(root.left);
    return subtreeWithAllDeepest(root.right);
};
var maxDepth = (root,depth=0)=>{
    if(!root) return 0;
    let height =1+ Math.max(maxDepth(root.left,depth+1),maxDepth(root.right,depth+1));
    return height;
}