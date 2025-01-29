var isValidBST = function (root) {
    let prev = null; 
    return dfs(root); 

    function dfs(root) {
        if (root == null) return true;
        if (!dfs(root.left)) return false; 
        if (prev !== null && root.val <= prev.val) { 
            return false; 
        }
        prev = root; 
        return dfs(root.right); 

    }
};