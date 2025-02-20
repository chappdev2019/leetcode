var recoverTree = function(root) {
    let first = null, second = null, prev = null;

    function dfs(node) {
        if (!node) return;
        dfs(node.left);
        if (prev && prev.val > node.val) {
            if (!first) {
                first = prev; 
            }
            second = node; 
        }
        prev = node;

        dfs(node.right);
    }
    dfs(root);

    if (first && second) {
        [first.val, second.val] = [second.val, first.val];
    }
};
