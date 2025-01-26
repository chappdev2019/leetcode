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



 */


var subtreeWithAllDeepest = function(root) {
    if(!root) return root;
    let queue = new Queue();
    queue.enqueue([root]);
    let res = root;
    while(queue.size()){
        let [node,depth] = queue.dequeue();
        let left = maxDepth(node.left);
        let right = maxDepth(node.right);
        if(left === right) return node;
        if(left>right) 
        queue.enqueue([node.left]);
        else 
        queue.enqueue([node.right]);
    }

};
/*var maxDepth = (root,depth=0)=>{
    if(!root) return 0;
    let height =1+ Math.max(maxDepth(root.left,depth+1),maxDepth(root.right,depth+1));
    return height;
}*/
var maxDepth = (root)=>{
    if(!root) return 0;
    let queue = new Queue();
    queue.enqueue([root,1]);
    let res = 0;
    while(queue.size()){
        let [node,depth] = queue.dequeue();
        res=Math.max(res,depth);
        if(node.left)queue.enqueue([node.left,depth+1]);
        if(node.right)queue.enqueue([node.right,depth+1]);

    }
    return res;
}
