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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    let node = findCommonAncestor(root)
    //let cur = findStartValue(node);
    //let cur2 = findEndVal(node);
    let pathArr =["",""];
    findTarget(node)
    return pathArr.join('');
    //return cur+cur2;

    function findCommonAncestor (root) {
        if (root == null) return null;
        if (root.val == startValue || root.val == destValue) return root;
        let left = findCommonAncestor(root.left);
        let right = findCommonAncestor(root.right);
        if(right&&left) return root;
        else if (right) return right;
        return left;
        
    }
    function findTarget(root,path=''){
        if (root == null) return null;
        if (root.val == startValue)  pathArr[0]="U".repeat(path.length);
        if (root.val == destValue)  pathArr[1]=path;
        findTarget(root.left, path+'L') 
        findTarget(root.right, path+'R');
    }

    function findStartValue (root, path='') {
        if (root == null) return null;
        if (root.val == startValue) return path;
        return (findStartValue(root.left, path+'U') ||
        findStartValue(root.right, path+'U'));
    }
   function findEndVal (root, path='') {
        if (root == null) return null;
        if (root.val == destValue) return path;
        return (findEndVal(root.left, path+'L') ||
        findEndVal(root.right, path+'R'));
    }
};