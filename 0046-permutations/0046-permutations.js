/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const used = Array(nums.length).fill(false);
    dfs()
    return res;
    function dfs(cur=[]) {
        if (cur.length == nums.length) {
            res.push([...cur]);
        }
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            cur.push(nums[i])
            used[i] = true;
            dfs(cur)
            cur.pop()
            used[i] = false;
        }
    }
};