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

[root, level]
q = []         q2=[]
[3,0]
[5,1] [1,1]


[7,2][4,2]

n* height of the tree
n2
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

var subtreeWithAllDeepest = function(root) {
    if(!root) return root;
    let queue = new Queue();
    queue.enqueue([root]);
    let res = root;
    let cache ={};
    while(queue.size()){
        let [node,depth] = queue.dequeue();
        let left = maxDepth(node.left,cache);
        let right = maxDepth(node.right,cache);
        if(left === right) return node;
        if(left>right) 
        queue.enqueue([node.left]);
        else 
        queue.enqueue([node.right]);
    }

};
var maxDepth = (root,depth=0,memo={})=>{
    if(!root) return 0;
    if(root in memo) return memo[root];
    let height =1+ Math.max(maxDepth(root.left,depth+1),maxDepth(root.right,depth+1));
    memo[root]=height;
    return height;
}
// var maxDepth = (root)=>{
//     if(!root) return 0;
//     let queue = new Queue();
//     queue.enqueue([root,1]);
//     let res = 0;
//     while(queue.size()){
//         let [node,depth] = queue.dequeue();
//         res=Math.max(res,depth);
//         if(node.left)queue.enqueue([node.left,depth+1]);
//         if(node.right)queue.enqueue([node.right,depth+1]);

//     }
//     return res;
// }
